import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { DateAudit } from 'modules/common/dateAudit.entity';
import { USER, SNSProvider } from './user.constants';

@Entity()
export class User extends DateAudit {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
    unique: true,
    length: USER.EMAIL.MAX_LENGTH,
  })
  email!: string;

  @Column({
    nullable: false,
    length: USER.NICKNAME.MAX_LENGTH,
  })
  nickname!: string;

  @Column({
    length: USER.PASSWORD.MAX_LENGTH,
    select: false,
  })
  password?: string;

  @Column({
    length: USER.AVATAR.MAX_LENGTH,
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
  })
  snsId?: string;
}
