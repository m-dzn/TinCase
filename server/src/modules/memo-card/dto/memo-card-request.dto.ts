import { CardRequest } from 'modules/card';
import { MemoCard } from '../memo-card.entity';

export class MemoCardRequest extends CardRequest {
  memo?: string;

  color?: string;

  public static toMemoCard(dto: MemoCardRequest) {
    const memoCard = new MemoCard();
    'memo' in dto && (memoCard.memo = dto.memo);
    'color' in dto && (memoCard.color = dto.color);
    return memoCard;
  }
}
