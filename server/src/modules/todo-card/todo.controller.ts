import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { COMMON_URL, handleSuccess, JSONPayload } from 'common';
import { TodoService } from './todo.service';
import { TodoRequest, TodoDetails } from './dto';

@Controller(COMMON_URL.API.TODO)
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

  @Get(`:${COMMON_URL.ID_PARAM}`)
  public async read(@Param(COMMON_URL.ID_PARAM) todoId: number) {
    const user = {
      id: 1,
    };

    const todo: TodoDetails = await this.todoService.read(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템 정보를 가져왔습니다.',
      data: todo,
    });
  }

  @Patch(`:${COMMON_URL.ID_PARAM}`)
  public async update(
    @Param(COMMON_URL.ID_PARAM) todoId: number,
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

  @Delete(`:${COMMON_URL.ID_PARAM}`)
  public async delete(
    @Param(COMMON_URL.ID_PARAM) todoId: number,
  ): Promise<JSONPayload> {
    const user = {
      id: 1,
    };

    await this.todoService.delete(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 제거되었습니다.',
    });
  }
}
