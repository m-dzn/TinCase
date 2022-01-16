import { Card, CardDetails } from 'modules/card';
import { MemoCard } from 'modules/memo-card/memo-card.entity';

export class MemoCardDetails extends CardDetails {
  memo: string;

  color?: string;

  constructor(card: Card, memoCard: MemoCard) {
    super(card);
    this.memo = memoCard.memo;
    this.color = memoCard.color;
  }
}
