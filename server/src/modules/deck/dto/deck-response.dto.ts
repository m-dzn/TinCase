import { Deck } from '../entities';
import { UserSummary } from 'modules/user';

export class DeckResponse {
  id: number;

  label: string;

  isPublic: boolean;

  createdAt: Date;

  updatedAt: Date;

  user: UserSummary;

  public static of(deck: Deck): DeckResponse {
    return {
      id: deck.id,
      label: deck.label,
      isPublic: deck.isPublic,
      createdAt: deck.createdAt,
      updatedAt: deck.updatedAt,
      user: deck.user && new UserSummary(deck.user),
    };
  }
}
