import { CardRequest } from 'modules/card';

export class MemoCardRequest extends CardRequest {
  memo?: string;

  color?: string;

  public static toMemoCard(dto: MemoCardRequest) {
    return {
      memo: dto.memo,
      color: dto.color,
    };
  }
}
