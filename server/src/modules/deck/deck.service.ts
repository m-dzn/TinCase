import { Injectable, Inject, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { checkCondition, checkExistance, isOwned } from 'common';

import { DeckRequest, DeckResponse } from './dto';
import { FavDeck } from './entities';
import { DeckRepository } from './deck.repository';
import { FavDeckRepository } from './fav-deck.repository';
import { CardInDeckRepository } from './card-in-deck.repository';
import { CardRepository } from 'modules/card';

@Injectable()
export class DeckService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly deckRepository: DeckRepository,

    private readonly cardRepository: CardRepository,

    private readonly cardInDeckRepository: CardInDeckRepository,

    private readonly favDeckRepository: FavDeckRepository,
  ) {}

  public async create(deckDto: DeckRequest, userId: number) {
    const newDeck = DeckRequest.toDeck(deckDto, userId);
    await this.deckRepository.save(newDeck);
  }

  public async read(deckId: number, userId: number) {
    const deck = await this.deckRepository.findOne(deckId, {
      where: [{ isPublic: true }, { userId }],
      relations: ['user'],
    });

    checkExistance(deck, '덱을 찾을 수 없습니다.');

    return DeckResponse.of(deck);
  }

  public async update(deckId: number, deckDto: DeckRequest, userId: number) {
    const exDeck = await this.deckRepository.findOne(deckId);

    checkExistance(exDeck, '덱을 찾을 수 없습니다.');
    isOwned(userId, exDeck.userId);

    const result = await this.deckRepository.update(deckId, deckDto);

    checkCondition(result.affected !== 0, '덱 수정 중 오류가 발생했습니다.');
  }

  public async delete(deckId: number, userId: number) {
    const deck = await this.deckRepository.findOne(deckId);

    checkExistance(deck, '덱을 찾을 수 없습니다.');
    isOwned(deck.userId, userId);

    const result = await this.deckRepository.delete(deckId);

    checkCondition(result.affected !== 0, '덱 제거 중 오류가 발생했습니다.');
  }

  public async getList() {
    return this.deckRepository.find({
      isPublic: true,
    });
  }

  public async addCardToDeck(deckId: number, cardId: number, userId: number) {
    const deck = await this.deckRepository.findOne(deckId);

    checkExistance(deck, '덱을 찾을 수 없습니다.');
    isOwned(deck.userId, userId);

    const card = await this.cardRepository.findOne(cardId, {
      where: [{ isPublic: true }, { userId }],
    });

    checkExistance(card, '카드를 찾을 수 없습니다.');

    await this.cardInDeckRepository.insert({ deckId, cardId });
  }

  public async removeCardFromDeck(
    deckId: number,
    cardId: number,
    userId: number,
  ) {
    const deck = await this.deckRepository.findOne(deckId);

    checkExistance(deck, '덱을 찾을 수 없습니다.');
    isOwned(deck.userId, userId);

    const result = await this.cardInDeckRepository.delete({ deckId, cardId });

    checkCondition(result.affected !== 0, '덱에 없는 카드입니다.');
  }

  public async addFavDeck(deckId: number, userId: number) {
    const deck = await this.deckRepository.findOne(deckId, {
      where: [{ isPublic: true }, { userId }],
    });

    checkExistance(deck, '덱을 찾을 수 없습니다.');

    const newFavDeck: FavDeck = { deckId, userId };

    await this.favDeckRepository.insert(newFavDeck);
  }

  public async removeFavDeck(deckId: number, userId: number) {
    const result = await this.favDeckRepository.delete({
      deckId,
      userId,
    });

    checkCondition(
      result.affected !== 0,
      '즐겨찾기 목록에서 덱을 찾을 수 없습니다.',
    );
  }
}
