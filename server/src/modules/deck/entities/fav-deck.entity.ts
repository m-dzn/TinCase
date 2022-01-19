import { DateAudit } from 'common';
import { Deck } from './deck.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from 'modules/user';

@Entity()
export class FavDeck extends DateAudit {
  @PrimaryColumn()
  deckId!: number;

  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => Deck, { primary: true })
  deck?: Deck;

  @ManyToOne(() => User, { primary: true })
  user?: User;
}
