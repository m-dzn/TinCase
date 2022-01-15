import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class DateAudit {
  @CreateDateColumn()
  public createdAt?: Date;
  @UpdateDateColumn()
  public updatedAt?: Date;
}
