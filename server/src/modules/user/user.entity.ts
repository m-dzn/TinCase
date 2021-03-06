import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from 'common';
import { USER, SNSProvider } from './user.constants';

@Entity()
export class User extends DateAudit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
    length: USER.EMAIL.MAX_LENGTH,
  })
  email!: string;

  @Column({
    length: USER.NICKNAME.MAX_LENGTH,
  })
  nickname!: string;

  @Column({
    length: USER.PASSWORD.MAX_LENGTH,
    nullable: true,
    select: false,
  })
  password?: string;

  @Column({
    length: USER.AVATAR.MAX_LENGTH,
    nullable: true,
  })
  avatar?: string;

  @Column({
    type: 'enum',
    enum: SNSProvider,
    default: SNSProvider.LOCAL,
  })
  provider?: SNSProvider;

  @Column({
    length: USER.SNS_ID.MAX_LENGTH,
    nullable: true,
  })
  snsId?: string;

  @Column({
    nullable: true,
    select: false,
  })
  refreshToken?: string;
}
