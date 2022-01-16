import { Deck } from '../entities';
import { User } from 'modules/user';

export class DeckResponse {
  label: string;

  isPublic: boolean;

  user: User;

  public static of(deck: Deck): DeckResponse {
    return {
      label: deck.label,
      isPublic: deck.isPublic,
      user: deck.user,
    };
  }
}
