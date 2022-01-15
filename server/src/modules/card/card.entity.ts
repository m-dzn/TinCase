import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateAudit } from 'modules/common/dateAudit.entity';
import { User } from 'modules/user/user.entity';

export const CARD = {
  TITLE: {
    MAX_LENGTH: 50,
  },
};

export enum CardType {
  MEMO = 'MEMO',
  TODO = 'TODO',
  VIDEO_LINK = 'VIDEO_LINK',
}

@Entity()
export class Card extends DateAudit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
    length: CARD.TITLE.MAX_LENGTH,
  })
  title!: string;

  @Column({
    type: 'enum',
    enum: CardType,
    nullable: false,
  })
  type!: CardType;

  @Column({
    nullable: false,
    default: false,
  })
  isPublic!: boolean;

  @ManyToOne((type) => User, { nullable: false })
  user!: User;

  // @OneToMany(() => CardInDeck, (cardInDeck) => cardInDeck.card)
  // cardsInDeck!: CardInDeck[];
}
