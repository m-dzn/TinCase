import { CardType } from '../card.entity';

export class CardDTO {
  readonly title: string;

  readonly type: CardType;

  readonly isPublic?: boolean;

  readonly deckId?: number;
}
