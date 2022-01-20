import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { handleSuccess, JSONPayload } from 'common';
import { TodoService } from './todo.service';
import { TodoRequest, TodoDetails } from './dto';
import { GetUser, JwtAuthGuard, JwtAuthOrGuestGuard } from 'modules/auth';
import { User } from 'modules/user';

@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  public async create(
    @Body() todoDto: TodoRequest,
    @GetUser() user: User,
  ): Promise<JSONPayload> {
    await this.todoService.create(todoDto, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 생성되었습니다.',
    });
  }

  @Get(`/:id`)
  @UseGuards(JwtAuthOrGuestGuard)
  public async read(@Param('id') todoId: number, @GetUser() user: User) {
    const todo: TodoDetails = await this.todoService.read(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템 정보를 가져왔습니다.',
      data: todo,
    });
  }

  @Patch(`/:id`)
  @UseGuards(JwtAuthGuard)
  public async update(
    @Param('id') todoId: number,
    @Body() todoDto: TodoRequest,
    @GetUser() user: User,
  ): Promise<JSONPayload> {
    await this.todoService.update(todoId, todoDto, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 수정되었습니다.',
    });
  }

  @Delete(`/:id`)
  @UseGuards(JwtAuthGuard)
  public async delete(
    @Param('id') todoId: number,
    @GetUser() user: User,
  ): Promise<JSONPayload> {
    await this.todoService.delete(todoId, user.id);

    return handleSuccess({
      message: 'Todo 아이템이 제거되었습니다.',
    });
  }
}
