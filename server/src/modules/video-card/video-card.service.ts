import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import {
  checkExistance,
  useTransaction,
  validateCardTypeRequest,
} from 'common';
import {
  Card,
  CardRepository,
  CardRequest,
  CardType,
  CardTypeService,
} from 'modules/card';

import { VideoCardRequest, VideoCardDetails } from './dto';
import { VideoCard } from './video-card.entity';
import { VideoCardRepository } from './video-card.repository';

@Injectable()
export class VideoCardService implements CardTypeService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,

    @InjectRepository(VideoCard)
    private readonly videoCardRepository: Repository<VideoCard>,

    private readonly connection: Connection,
  ) {}

  public async create(dto: CardRequest, userId: number): Promise<void> {
    const newCard = VideoCardRequest.toCard(dto, userId);

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

        const videoCard: VideoCard = {
          cardId: savedCard.id,
          ...VideoCardRequest.toVideoCard(dto),
        };

        await queryRunner.manager
          .getCustomRepository(VideoCardRepository)
          .save(videoCard, {
            transaction: false,
          });
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          '비디오 카드 생성 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }

  public async read(card: Card): Promise<VideoCardDetails> {
    const videoCard = await this.videoCardRepository.findOne(card.id);

    checkExistance(videoCard, '비디오 카드를 찾을 수 없습니다.');

    return new VideoCardDetails(card, videoCard);
  }

  public async update(
    cardId: number,
    dto: VideoCardRequest,
    userId: number,
  ): Promise<void> {
    // 카드 존재 여부, 소유권, 타입 일치 여부 검사
    const exCard = await this.cardRepository.findOne(cardId);
    validateCardTypeRequest(exCard, userId, CardType.VIDEO);

    // 카드 업데이트
    const card: Card = VideoCardRequest.toCard(dto, userId);
    const videoCard: VideoCard = VideoCardRequest.toVideoCard(dto);

    const queryRunner = this.connection.createQueryRunner();
    queryRunner.connect();

    await useTransaction(
      queryRunner,
      async () => {
        await queryRunner.manager
          .getCustomRepository(CardRepository)
          .update(cardId, card);
        await queryRunner.manager
          .getCustomRepository(VideoCardRepository)
          .update(cardId, videoCard);
      },
      async (err) => {
        this.logger.error(err);
        throw new HttpException(
          '비디오 카드 수정 중 오류가 발생했습니다.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      },
    );
  }
}
