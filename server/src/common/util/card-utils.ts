import { Card, CardType } from 'modules/card';
import { HttpException, HttpStatus } from '@nestjs/common';
import { isOwned, checkExistance } from 'common';

export const validateCardType = (card: Card, targetType: CardType) => {
  if (card.type !== targetType) {
    throw new HttpException(
      '카드 타입이 일치하지 않습니다.',
      HttpStatus.BAD_REQUEST,
    );
  }
};

export const validateCardRequest = (card: Card, userId: number) => {
  checkExistance(card, '카드를 찾을 수 없습니다.');
  isOwned(card.userId, userId);
};

export const validateCardTypeRequest = (
  card: Card,
  userId: number,
  targetType: CardType,
) => {
  validateCardRequest(card, userId);
  validateCardType(card, targetType);
};
