import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card, CardTypeService } from 'modules/card';
import { Connection, Repository } from 'typeorm';
import { MemoCard } from './memo-card.entity';
import { MemoCardRequest, MemoCardDetails } from './dto';
import { User } from 'modules/user';
import { useTransaction } from 'common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class MemoCardService implements CardTypeService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,

    @InjectRepository(MemoCard)
    private readonly memoCardRepository: Repository<MemoCard>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly connection: Connection,
  ) {}

  public async create(dto: MemoCardRequest, userId: number): Promise<void> {
    const newCard = MemoCardRequest.toCard(dto, userId);

    const queryRunner = this.connection.createQueryRunner();
    await useTransaction(
      queryRunner,
      async () => {
        const savedCard = await this.cardRepository.save(newCard, {
          transaction: false,
        });

        const memoCard: MemoCard = {
          cardId: savedCard.id,
          ...MemoCardRequest.toMemoCard(dto),
        };

        await this.memoCardRepository.save(memoCard, {
          transaction: false,
        });
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          '메모 카드 생성 중 알 수 없는 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }

  public async read(card: Card): Promise<MemoCardDetails> {
    const memoCard = await this.memoCardRepository.findOne(card.id);

    if (!memoCard) {
      throw new HttpException(
        '메모 카드를 찾을 수 없습니다.',
        HttpStatus.NOT_FOUND,
      );
    }

    return new MemoCardDetails(card, memoCard);
  }

  public async update(
    cardId: number,
    dto: MemoCardRequest,
    userId: number,
  ): Promise<void> {
    const card: Card = MemoCardRequest.toCard(dto, userId);
    const memoCard: MemoCard = MemoCardRequest.toMemoCard(dto);

    const queryRunner = this.connection.createQueryRunner();

    await useTransaction(
      queryRunner,
      async () => {
        await this.cardRepository.update(cardId, card);
        await this.memoCardRepository.update(cardId, memoCard);
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          '메모 카드 수정 중 알 수 없는 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }
}
