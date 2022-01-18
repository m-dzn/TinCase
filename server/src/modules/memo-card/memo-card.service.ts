import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { Card, CardRepository, CardType, CardTypeService } from 'modules/card';
import { Connection } from 'typeorm';
import { MemoCard } from './memo-card.entity';
import { MemoCardRequest, MemoCardDetails } from './dto';
import {
  checkExistance,
  useTransaction,
  validateCardTypeRequest,
} from 'common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { MemoCardRepository } from 'modules/memo-card';

@Injectable()
export class MemoCardService implements CardTypeService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly cardRepository: CardRepository,

    private readonly memoCardRepository: MemoCardRepository,

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
          '메모 카드 생성 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }

  public async read(card: Card): Promise<MemoCardDetails> {
    const memoCard = await this.memoCardRepository.findOne(card.id);

    checkExistance(memoCard, '메모 카드를 찾을 수 없습니다.');

    return new MemoCardDetails(card, memoCard);
  }

  public async update(
    cardId: number,
    dto: MemoCardRequest,
    userId: number,
  ): Promise<void> {
    // 존재 여부, 소유권, 타입 일치 여부 검사
    const exCard = await this.cardRepository.findOne(cardId);
    validateCardTypeRequest(exCard, userId, CardType.MEMO);

    // 카드 업데이트
    const card = MemoCardRequest.toCard(dto, userId);
    const memoCard: MemoCard = MemoCardRequest.toMemoCard(dto);
    console.log(card);
    console.log(memoCard);

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
          '메모 카드 수정 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }
}
