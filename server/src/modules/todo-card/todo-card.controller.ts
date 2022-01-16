import { Controller, Get, Inject, LoggerService, Param } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { COMMON_URL, handleSuccess } from 'common';

import { Todo } from './todo-card.entity';
import { TodoCardService } from './todo-card.service';

@Controller('todos')
export class TodoController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly todoService: TodoCardService,
  ) {}

  @Get(COMMON_URL.ID_PARAM)
  public async getTodo(@Param(COMMON_URL.ID_PARAM) todoId: number) {
    this.logger.log('로깅 테스트');
    const todo: Todo = await this.todoService.getTodo(todoId);

    return handleSuccess({
      message: 'Todo 아이템을 조회했습니다.',
      data: todo,
    });
  }
}
