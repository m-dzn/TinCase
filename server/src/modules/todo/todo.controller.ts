import { Controller, Get, Inject, LoggerService, Param } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { handleSuccess } from 'common';

@Controller('todos')
export class TodoController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly todoService: TodoService,
  ) {}

  @Get(':id')
  public async getTodo(@Param() params) {
    const { id } = params;

    this.logger.log('로깅 테스트');
    const todo: Todo = await this.todoService.getTodo(id);

    return handleSuccess({
      message: 'Todo 아이템을 조회했습니다.',
      data: todo,
    });
  }
}
