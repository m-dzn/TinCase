import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { DateAudit } from 'common';
import { Card } from 'modules/card';
import { Todo } from './todo.entity';

@Entity()
export class TodoCard extends DateAudit {
  @PrimaryColumn()
  cardId?: number;

  @OneToOne(() => Card, { primary: true, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn()
  card?: Card;

  @OneToMany(() => Todo, (todo) => todo.card)
  todos?: Todo[];
}
