import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { DeckRequest } from './dto';
import { DeckService } from './deck.service';
import { COMMON_URL, handleSuccess } from 'common';

@Controller('decks')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  public async create(@Body() deckDTO: DeckRequest) {
    const user = {
      id: 1,
    };
    await this.deckService.create(deckDTO, user.id);

    return handleSuccess({
      message: '덱이 생성되었습니다.',
    });
  }

  @Get(COMMON_URL.ID_PARAM)
  public async read(@Param(COMMON_URL.ID_PARAM) deckId: number) {
    const deck = await this.deckService.read(deckId);

    return handleSuccess({
      message: '덱 정보를 가져왔습니다.',
      data: deck,
    });
  }

  @Patch(COMMON_URL.ID_PARAM)
  public async update(
    @Param(COMMON_URL.ID_PARAM) deckId: number,
    @Body() deckDTO: DeckRequest,
  ) {
    await this.deckService.update(deckId, deckDTO);

    return handleSuccess({
      message: '덱 정보가 수정되었습니다.',
    });
  }

  @Delete(COMMON_URL.ID_PARAM)
  public async delete(@Param(COMMON_URL.ID_PARAM) deckId: number) {
    await this.deckService.delete(deckId);
  }

  @Get()
  public async getList() {
    const decks = await this.deckService.getList();
    return handleSuccess({
      message: '덱 목록을 가져왔습니다.',
      data: decks,
    });
  }
}
