import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'modules/user';
import { Repository } from 'typeorm';
import { Card } from './card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async read(cardId: number, userId: number) {
    const card = await this.cardRepository.findOne(cardId);

    if (!card) {
      throw new HttpException('카드를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }

    if (card.userId) {
    }

    return card;
  }

  public async delete(cardId: number, userId: number) {
    const card = await this.cardRepository.findOneOrFail(cardId);

    this.checkAuthorization(card.userId, userId);

    const result = await this.cardRepository.delete(cardId);

    if (!result.affected) {
      throw new HttpException('카드를 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
  }

  public async getList() {
    return this.cardRepository.find();
  }

  private checkAuthorization(ownerId: number, userId: number) {
    if (ownerId !== userId) {
      throw new HttpException('접근 권한이 없습니다.', HttpStatus.UNAUTHORIZED);
    }
  }
}
