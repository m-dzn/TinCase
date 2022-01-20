import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  isOwned,
  validateCardRequest,
  checkCondition,
  checkExistance,
} from 'common';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  public async read(cardId: number, userId: number) {
    const card = await this.cardRepository.findOne(cardId);

    validateCardRequest(card, userId);

    return card;
  }

  public async delete(cardId: number, userId: number) {
    const card = await this.cardRepository.findOne(cardId);

    checkExistance(card, '카드를 찾을 수 없습니다.');
    isOwned(card.userId, userId);

    const result = await this.cardRepository.delete(cardId);

    checkCondition(
      result.affected !== 0,
      '카드 삭제 중 오류가 발생했습니다.',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  public async getList() {
    return this.cardRepository.find({
      isPublic: true,
    });
  }
}
