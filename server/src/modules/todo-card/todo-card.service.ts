import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Card } from 'modules/card';

import { Todo } from './todo-card.entity';
import { TodoDTO } from './dto';

@Injectable()
export class TodoCardService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,

    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  public async createTodo(todoDTO: TodoDTO): Promise<void> {
    const newTodo: Todo = {
      text: todoDTO.text,
      card: await this.cardRepository.findOne(todoDTO.cardId),
    };

    await this.todoRepository.save(newTodo);
  }

  public async getTodo(todoId: number): Promise<Todo> {
    const todo: Todo = await this.todoRepository.findOne(todoId);

    if (!todo) {
      this.logger.log('할 일을 찾을 수 없습니다.');
    }

    return todo;
  }
}
