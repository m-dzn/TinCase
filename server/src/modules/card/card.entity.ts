import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from 'common';
import { User } from 'modules/user';
import { CardType } from './card.constants';

@Entity()
export class Card extends DateAudit {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  label!: string;

  @Column({
    type: 'enum',
    enum: CardType,
  })
  type!: CardType;

  @Column({
    default: false,
  })
  isPublic!: boolean;

  // Relations
  @ManyToOne(() => User, { nullable: false })
  user?: User;

  @Column()
  userId?: number;

  @Column({
    nullable: true,
  })
  deckId?: number;

  // @ManyToOne(() => Deck, (deck) => deck.cards)
  // deck!: Deck;
}
