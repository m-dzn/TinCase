import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  LoggerService,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import {
  checkCondition,
  checkExistance,
  validateCardTypeRequest,
} from 'common';
import { CardRepository, CardType } from 'modules/card';

import { TodoRequest, TodoDetails } from './dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly todoRepository: TodoRepository,

    private readonly cardRepository: CardRepository,
  ) {}

  public async create(dto: TodoRequest, userId: number): Promise<void> {
    // 카드 유효성 검사
    const card = await this.cardRepository.findOne(dto.cardId);

    validateCardTypeRequest(card, userId, CardType.TODO);

    // Todo 아이템 저장
    const newTodo = TodoRequest.toTodo(dto);

    try {
      await this.todoRepository.save(newTodo);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        'Todo 아이템 생성 중 오류가 발생했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async read(todoId: number, userId: number) {
    const todo = await this.todoRepository.findOne(todoId);

    checkExistance(todo, 'Todo 아이템을 찾을 수 없습니다.');

    return new TodoDetails(todo);
  }

  public async update(
    todoId: number,
    dto: TodoRequest,
    userId: number,
  ): Promise<void> {
    const todo = TodoRequest.toTodo(dto);

    const result = await this.todoRepository.update(todoId, todo);

    checkCondition(result.affected !== 0, 'Todo 아이템을 찾을 수 없습니다.');
  }

  public async delete(todoId: number, userId: number): Promise<void> {
    const result = await this.todoRepository.delete(todoId);

    checkCondition(result.affected !== 0, 'Todo 아이템을 찾을 수 없습니다.');
  }
}
