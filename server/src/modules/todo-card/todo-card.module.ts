import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardRepository } from 'modules/card';

import { TodoCardService } from './todo-card.service';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoCardRepository } from './todo-card.repository';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TodoCardRepository,
      TodoRepository,
      CardRepository,
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoCardService, TodoService],
  exports: [TodoCardService, TodoService],
})
export class TodoCardModule {}
