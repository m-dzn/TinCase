import { DateAudit } from 'common';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Deck } from './deck.entity';
import { Card } from 'modules/card';

@Entity()
export class CardInDeck extends DateAudit {
  @PrimaryColumn()
  deckId!: number;

  @PrimaryColumn()
  cardId!: number;

  // Relations
  @ManyToOne(() => Deck, { primary: true, cascade: true, onDelete: 'CASCADE' })
  deck: Deck;

  @ManyToOne(() => Card, { primary: true, cascade: true, onDelete: 'CASCADE' })
  card: Card;
}
