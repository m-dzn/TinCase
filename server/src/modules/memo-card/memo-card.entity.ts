import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { DateAudit } from 'common';
import { MEMO } from 'modules/memo-card';
import { Card } from 'modules/card';

@Entity()
export class MemoCard extends DateAudit {
  @PrimaryColumn()
  cardId?: number;

  @OneToOne(() => Card, { primary: true, cascade: true })
  @JoinColumn()
  card?: Card;

  @Column({
    length: MEMO.MEMO.MAX_LENGTH,
  })
  memo!: string;

  @Column({
    nullable: true,
    length: MEMO.COLOR.MAX_LENGTH,
  })
  color?: string;
}
