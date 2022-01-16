import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'modules/card';

import { Todo } from './todo-card.entity';
import { TodoCardService } from './todo-card.service';
import { TodoController } from './todo-card.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, Card])],
  controllers: [TodoController],
  providers: [TodoCardService],
  exports: [TodoCardService],
})
export class TodoCardModule {}
