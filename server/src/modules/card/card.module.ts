import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { CardService } from './card.service';
import { Card } from './card.entity';
import { User } from 'modules/user';
import { MemoCardModule } from 'modules/memo-card';
import { TodoCardModule } from 'modules/todo-card';

@Module({
  imports: [
    TypeOrmModule.forFeature([Card, User]),
    MemoCardModule,
    TodoCardModule,
  ],
  controllers: [CardController],
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
