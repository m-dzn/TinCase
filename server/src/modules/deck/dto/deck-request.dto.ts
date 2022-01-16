import { Deck } from '../entities';
import { User } from 'modules/user';

export class DeckRequest {
  label: string;

  isPublic: boolean;

  userId: number;

  public static toDeck(dto: DeckRequest, user: User): Deck {
    return {
      label: dto.label,
      isPublic: dto.isPublic,
      user,
    };
  }
}
