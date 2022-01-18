import { CardType } from '../card.constants';
import { Card } from '../card.entity';

export class CardRequest {
  id?: number;

  label?: string;

  type?: CardType;

  isPublic?: boolean;

  deckId?: number;

  public static toCard(dto: CardRequest, userId: number) {
    const card = new Card();
    'label' in dto && (card.label = dto.label);
    'type' in dto && (card.type = dto.type);
    'isPublic' in dto && (card.isPublic = dto.isPublic);
    'deckId' in dto && (card.deckId = dto.deckId);
    userId && (card.userId = userId);

    return card;
  }
}
