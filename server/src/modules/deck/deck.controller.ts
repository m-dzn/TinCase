import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { DeckRequest } from './dto';
import { DeckService } from './deck.service';
import { handleSuccess } from 'common';
import { GetUser, JwtAuthGuard, JwtAuthOrGuestGuard } from 'modules/auth';
import { User } from 'modules/user';

@Controller('decks')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  public async create(@Body() deckDto: DeckRequest, @GetUser() user: User) {
    await this.deckService.create(deckDto, user.id);

    return handleSuccess({
      message: '덱이 생성되었습니다.',
    });
  }

  @Get(':id')
  @UseGuards(JwtAuthOrGuestGuard)
  public async read(@Param('id') deckId: number, @GetUser() user: User) {
    const deck = await this.deckService.read(deckId, user?.id);

    return handleSuccess({
      message: '덱 정보를 가져왔습니다.',
      data: deck,
    });
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  public async update(
    @Param('id') deckId: number,
    @Body() deckDto: DeckRequest,
    @GetUser() user: User,
  ) {
    await this.deckService.update(deckId, deckDto, user.id);

    return handleSuccess({
      message: '덱 정보가 수정되었습니다.',
    });
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  public async delete(@Param('id') deckId: number, @GetUser() user: User) {
    await this.deckService.delete(deckId, user.id);
  }

  @Get()
  public async getList() {
    const decks = await this.deckService.getList();
    return handleSuccess({
      message: '덱 목록을 가져왔습니다.',
      data: decks,
    });
  }

  @Post(':id/favorite')
  @UseGuards(JwtAuthGuard)
  public async addFavDeck(@GetUser() user: User, @Param('id') deckId: number) {
    await this.deckService.addFavDeck(deckId, user.id);
    return handleSuccess({
      message: '좋아하는 덱 목록에 추가되었습니다.',
    });
  }

  @Delete(':id/favorite')
  @UseGuards(JwtAuthGuard)
  public async removeFavDeck(
    @GetUser() user: User,
    @Param('id') deckId: number,
  ) {
    await this.deckService.removeFavDeck(deckId, user.id);
    return handleSuccess({
      message: '좋아하는 덱 목록에서 제거되었습니다.',
    });
  }
}
