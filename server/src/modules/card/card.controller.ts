import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { handleSuccess } from 'common';
import { CardType } from './card.constants';
import { CardService } from './card.service';
import { CardRequest } from './dto';
import { CardTypeService } from './interfaces';

import { MemoCardService } from 'modules/memo-card';
import { TodoCardService } from 'modules/todo-card';
import { VideoCardService } from 'modules/video-card';
import { GetUser, JwtAuthGuard, JwtAuthOrGuestGuard } from 'modules/auth';
import { User } from 'modules/user';

@Controller('/cards')
export class CardController {
  constructor(
    private readonly cardService: CardService,
    private readonly memoCardService: MemoCardService,
    private readonly todoCardService: TodoCardService,
    private readonly videoCardService: VideoCardService,
  ) {}

  // 카드 생성
  @Post()
  @UseGuards(JwtAuthGuard)
  public async create(@Body() cardDto: CardRequest, @GetUser() user: User) {
    const cardTypeService: CardTypeService = this.getCardTypeService(
      cardDto.type,
    );

    await cardTypeService.create(cardDto, user.id);

    return handleSuccess({
      message: '카드가 생성되었습니다.',
    });
  }

  @Get(`/:id`)
  @UseGuards(JwtAuthOrGuestGuard)
  public async read(@Param('id') cardId: number, @GetUser() user: User) {
    const card = await this.cardService.read(cardId, user.id);

    // 조인 상속 전략
    // 1. 카드 타입에 맞는 테이블의 Service를 가져옵니다.
    // 2. 유형별 추가 정보를 DB에서 가져와 DTO에 담은 후 돌려받습니다.
    const cardTypeService = this.getCardTypeService(card.type);
    const responseData = await cardTypeService.read(card);

    return handleSuccess({
      message: '카드 정보를 가져왔습니다.',
      data: responseData,
    });
  }

  @Patch(`/:id`)
  @UseGuards(JwtAuthGuard)
  public async update(
    @Param('id') cardId: number,
    @Body() cardDto: CardRequest,
    @GetUser() user: User,
  ) {
    const cardTypeService = this.getCardTypeService(cardDto.type);
    await cardTypeService.update(cardId, cardDto, user.id);

    return handleSuccess({
      message: '카드 정보가 수정되었습니다.',
    });
  }

  @Delete(`/:id`)
  @UseGuards(JwtAuthGuard)
  public async delete(@Param('id') deckId: number, @GetUser() user: User) {
    await this.cardService.delete(deckId, user.id);

    return handleSuccess({
      message: '카드가 삭제되었습니다.',
    });
  }

  @Get()
  public async getList() {
    const decks = await this.cardService.getList();

    return handleSuccess({
      message: '카드 목록을 가져왔습니다.',
      data: decks,
    });
  }

  private getCardTypeService(cardType: CardType) {
    switch (cardType) {
      case CardType.MEMO:
        return this.memoCardService;
      case CardType.TODO:
        return this.todoCardService;
      case CardType.VIDEO:
        return this.videoCardService;
      default:
        throw new HttpException(
          '잘못된 유형의 카드입니다.',
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
