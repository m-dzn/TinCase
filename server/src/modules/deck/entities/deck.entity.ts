import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DateAudit } from 'common';
import { User } from 'modules/user';

import { DECK } from '../deck.constants';
import { Card } from 'modules/card';

@Entity()
export class Deck extends DateAudit {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: DECK.LABEL.MAX_LENGTH,
  })
  label!: string;

  @Column({
    default: false,
  })
  isPublic?: boolean;

  @Column({
    default: 0,
  })
  viewCount?: number;

  @Column({
    default: 0,
  })
  likeCount?: number;

  // Relations
  @ManyToOne(() => User)
  user!: User;

  @Column()
  userId?: number;

  // @OneToMany(() => Card, (card) => card.deck)
  // cards?: Card[];
}
