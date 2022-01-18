import {
  Inject,
  Injectable,
  LoggerService,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Connection } from 'typeorm';

import { TodoCard } from './entities';
import { TodoCardRequest, TodoCardDetails } from './dto';
import {
  checkExistance,
  useTransaction,
  validateCardTypeRequest,
} from 'common';
import { TodoCardRepository } from './todo-card.repository';
import {
  Card,
  CardDetails,
  CardRepository,
  CardRequest,
  CardType,
  CardTypeService,
} from 'modules/card';

@Injectable()
export class TodoCardService implements CardTypeService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly todoCardRepository: TodoCardRepository,

    private readonly cardRepository: CardRepository,

    private readonly connection: Connection,
  ) {}

  public async create(dto: TodoCardRequest, userId: number): Promise<void> {
    const newCard = TodoCardRequest.toCard(dto, userId);

    const queryRunner = this.connection.createQueryRunner();
    queryRunner.connect();

    await useTransaction(
      queryRunner,
      async () => {
        const savedCard = await queryRunner.manager
          .getCustomRepository(CardRepository)
          .save(newCard, {
            transaction: false,
          });

        const todoCard: TodoCard = {
          cardId: savedCard.id,
          ...TodoCardRequest.toTodoCard(dto),
        };

        await queryRunner.manager
          .getCustomRepository(TodoCardRepository)
          .save(todoCard, {
            transaction: false,
          });
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          'Todo 카드 생성 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }

  public async read(card: Card): Promise<CardDetails> {
    const todoCard = await this.todoCardRepository.findOne(card.id, {
      relations: ['todos'],
    });

    checkExistance(todoCard, 'Todo 카드를 찾을 수 없습니다.');

    return new TodoCardDetails(card, todoCard);
  }

  public async update(
    cardId: number,
    dto: CardRequest,
    userId: number,
  ): Promise<void> {
    // 존재 여부, 소유권, 타입 일치 여부 검사
    const exCard = await this.cardRepository.findOne(cardId);
    validateCardTypeRequest(exCard, userId, CardType.TODO);

    // 카드 업데이트
    const card: Card = TodoCardRequest.toCard(dto, userId);
    const todoCard: TodoCard = TodoCardRequest.toTodoCard(dto);

    const queryRunner = this.connection.createQueryRunner();
    queryRunner.connect();

    await useTransaction(
      queryRunner,
      async () => {
        await queryRunner.manager
          .getCustomRepository(CardRepository)
          .update(cardId, card);
        await queryRunner.manager
          .getCustomRepository(TodoCardRepository)
          .update(cardId, todoCard);
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          'Todo 카드 수정 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }
}
