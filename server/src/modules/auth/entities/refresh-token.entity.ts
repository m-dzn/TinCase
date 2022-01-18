import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateAudit } from 'common';
import { User } from 'modules/user';

@Entity()
export class RefreshToken extends DateAudit {
  @PrimaryGeneratedColumn()
  userId?: number;

  @Column({
    nullable: true,
  })
  refreshToken?: string;

  @OneToOne(() => User, { primary: true, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user!: User;
}
