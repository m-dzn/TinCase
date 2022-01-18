import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateAudit } from 'common';

import { TODO } from '../todo-card.constants';
import { TodoCard } from './todo-card.entity';

@Entity()
export class Todo extends DateAudit {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    length: TODO.TEXT.MAX_LENGTH,
  })
  text!: string;

  @Column({
    default: false,
  })
  done?: boolean;

  // Foreign Keys
  @Column()
  cardId?: number;

  // Relations
  @ManyToOne(() => TodoCard, (todoCard) => todoCard.todos, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'cardId',
  })
  card!: TodoCard;
}
