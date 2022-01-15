import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DateAudit } from 'modules/common/dateAudit.entity';
import { User } from 'modules/user/user.entity';

export const DECK = {
  TITLE: {
    MAX_LENGTH: 50,
  },
};

@Entity()
export class Deck extends DateAudit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
    length: DECK.TITLE.MAX_LENGTH,
  })
  title!: string;

  @Column({
    nullable: false,
    default: false,
  })
  isPublic!: boolean;

  @ManyToOne((type) => User, { nullable: false })
  user!: User;

  // @OneToMany(() => CardInDeck, (cardInDeck) => cardInDeck.deck)
  // cardsInDeck!: CardInDeck[];
}
