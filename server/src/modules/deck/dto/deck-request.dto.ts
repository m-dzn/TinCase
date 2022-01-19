import { Deck } from '../entities';

export class DeckRequest {
  label: string;

  isPublic: boolean;

  userId: number;

  public static toDeck(dto: DeckRequest, userId: number): Deck {
    const deck = new Deck();
    'label' in dto && (deck.label = dto.label);
    'isPublic' in dto && (deck.isPublic = dto.isPublic);
    userId && (deck.userId = userId);
    return deck;
  }
}
