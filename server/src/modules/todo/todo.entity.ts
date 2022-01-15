import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from 'modules/card';
import { DateAudit } from 'modules/common';

export const TODO = {
  TEXT: {
    MAX_LENGTH: 100,
  },
};

@Entity()
export class Todo extends DateAudit {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    nullable: false,
    length: TODO.TEXT.MAX_LENGTH,
  })
  text!: string;

  @Column({
    nullable: false,
    default: false,
  })
  done?: boolean;

  @ManyToOne((type) => Card, { nullable: false })
  card!: Card;
}
