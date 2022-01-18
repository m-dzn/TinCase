import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { DateAudit } from 'common';
import { MEMO_CARD } from './memo-card.constants';
import { Card } from 'modules/card';

@Entity()
export class MemoCard extends DateAudit {
  @PrimaryColumn()
  cardId?: number;

  @OneToOne(() => Card, { primary: true, onDelete: 'CASCADE' })
  @JoinColumn()
  card?: Card;

  @Column({
    length: MEMO_CARD.MEMO.MAX_LENGTH,
  })
  memo!: string;

  @Column({
    nullable: true,
    length: MEMO_CARD.COLOR.MAX_LENGTH,
  })
  color?: string;
}
