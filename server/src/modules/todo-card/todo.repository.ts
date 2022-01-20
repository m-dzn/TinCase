import { EntityRepository, Repository } from 'typeorm';

import { Todo } from './entities';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  public findTodoWithUserId(todoId: number): Promise<{ userId: number }> {
    return this.createQueryBuilder('todo')
      .select('todo.*')
      .addSelect('card.userId', 'userId')
      .innerJoin('todo.card', 'todo_card')
      .innerJoin('todo_card.card', 'card')
      .where('todo.id = :todoId', { todoId })
      .getRawOne();
  }
}
