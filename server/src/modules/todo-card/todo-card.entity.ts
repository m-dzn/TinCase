import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from 'common';
import { Card } from 'modules/card';

import { TODO } from './todo-card.constants';

@Entity()
export class Todo extends DateAudit {
  @PrimaryGeneratedColumn()
  card_id?: number;

  @Column({
    length: TODO.TEXT.MAX_LENGTH,
  })
  text!: string;

  @Column({
    default: false,
  })
  done?: boolean;

  @ManyToOne(() => Card)
  card!: Card;
}
