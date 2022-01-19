import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { handleSuccess, JSONPayload } from 'common';
import { TodoService } from './todo.service';
import { TodoRequest, TodoDetails } from './dto';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  public async create(@Body() todoDto: TodoRequest): Promise<JSONPayload> {
    const user = {
      id: 1,
    };

    await this.todoService.create(todoDto, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 생성되었습니다.',
    });
  }

  @Get(`:id`)
  public async read(@Param('id') todoId: number) {
    const user = {
      id: 1,
    };

    const todo: TodoDetails = await this.todoService.read(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템 정보를 가져왔습니다.',
      data: todo,
    });
  }

  @Patch(`:id`)
  public async update(
    @Param('id') todoId: number,
    @Body() todoDto: TodoRequest,
  ): Promise<JSONPayload> {
    const user = {
      id: 1,
    };

    await this.todoService.update(todoId, todoDto, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 수정되었습니다.',
    });
  }

  @Delete(`:id`)
  public async delete(@Param('id') todoId: number): Promise<JSONPayload> {
    const user = {
      id: 1,
    };

    await this.todoService.delete(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 제거되었습니다.',
    });
  }
}
