import { User } from 'modules/user';
import { CardType } from '../card.constants';
import { Card } from '../card.entity';

export class CardDetails {
  id: number;

  label: string;

  type: CardType;

  isPublic?: boolean;

  deckId?: number;

  user: User;

  constructor(card: Card) {
    this.id = card.id;
    this.label = card.label;
    this.type = card.type;
    this.isPublic = card.isPublic;
    this.deckId = card.deckId;
    this.user = card.user;
  }
}
