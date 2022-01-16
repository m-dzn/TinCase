import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoCardService } from './memo-card.service';
import { MemoCardController } from './memo-card.controller';
import { MemoCard } from './memo-card.entity';
import { User } from 'modules/user';
import { Card } from 'modules/card';

@Module({
  imports: [TypeOrmModule.forFeature([MemoCard, Card, User])],
  controllers: [MemoCardController],
  providers: [MemoCardService],
  exports: [MemoCardService],
})
export class MemoCardModule {}
