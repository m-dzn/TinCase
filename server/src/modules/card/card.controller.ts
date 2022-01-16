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
} from '@nestjs/common';
import { COMMON_URL, handleSuccess } from 'common';
import { CardType } from './card.constants';
import { CardService } from './card.service';
import { CardRequest } from './dto';
import { CardTypeService } from './interfaces';

import { MemoCardService } from 'modules/memo-card';
import { TodoCardService } from 'modules/todo-card';

@Controller('cards')
export class CardController {
  constructor(
    private readonly cardService: CardService,
    private readonly memoCardService: MemoCardService,
    private readonly todoCardService: TodoCardService,
  ) {}

  // 카드 생성
  @Post()
  public async create(@Body() cardDTO: CardRequest) {
    const user = {
      id: 1,
    };

    const cardTypeService: CardTypeService = this.getCardTypeService(
      cardDTO.type,
    );

    await cardTypeService.create(cardDTO, user.id);

    return handleSuccess({
      message: '카드가 생성되었습니다.',
    });
  }

  @Get(`:${COMMON_URL.ID_PARAM}`)
  public async read(@Param(COMMON_URL.ID_PARAM) cardId: number) {
    const user = {
      id: 1,
    };

    const card = await this.cardService.read(cardId, user.id);

    const cardTypeService = this.getCardTypeService(card.type);
    const responseData = await cardTypeService.read(card);

    return handleSuccess({
      message: '카드 정보를 가져왔습니다.',
      data: responseData,
    });
  }

  @Patch(`:${COMMON_URL.ID_PARAM}`)
  public async update(
    @Param(COMMON_URL.ID_PARAM) cardId: number,
    @Body() cardDTO: CardRequest,
  ) {
    const user = {
      id: 1,
    };

    const cardTypeService = this.getCardTypeService(cardDTO.type);
    await cardTypeService.update(cardId, cardDTO, user.id);

    return handleSuccess({
      message: '카드 정보가 수정되었습니다.',
    });
  }

  @Delete(`:${COMMON_URL.ID_PARAM}`)
  public async delete(@Param(COMMON_URL.ID_PARAM) deckId: number) {
    const user = {
      id: 1,
    };

    await this.cardService.delete(deckId, user.id);
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
      // case CardType.TODO:
      //   return this.todoCardService;
      default:
        throw new HttpException(
          '잘못된 유형의 카드입니다.',
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
