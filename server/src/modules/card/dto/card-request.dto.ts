import { CardType } from '../card.constants';
import { Card } from '../card.entity';

export class CardRequest {
  id?: number;

  label?: string;

  type?: CardType;

  isPublic?: boolean;

  deckId?: number;

  public static toCard(dto: CardRequest, userId: number): Card {
    return {
      label: dto.label,
      type: dto.type,
      isPublic: dto.isPublic,
      deckId: dto.deckId,
      userId,
    };
  }
}
