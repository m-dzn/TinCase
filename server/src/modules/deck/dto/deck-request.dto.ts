import { Deck } from '../entities';
import { User } from 'modules/user';

export class DeckRequest {
  label: string;

  isPublic: boolean;

  userId: number;

  public static toDeck(dto: DeckRequest, user: User): Deck {
    const deck = new Deck();
    'label' in dto && (deck.label = dto.label);
    'isPublic' in dto && (deck.isPublic = dto.isPublic);
    user && (deck.user = user);
    return deck;
  }
}
