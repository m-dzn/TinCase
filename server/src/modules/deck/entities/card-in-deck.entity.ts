import { DateAudit } from 'common';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Deck } from './deck.entity';
import { Card } from 'modules/card';

@Entity()
export class CardInDeck extends DateAudit {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Deck, { nullable: false })
  deck: Deck;

  @ManyToOne(() => Card, { nullable: true })
  card: Card;
}
