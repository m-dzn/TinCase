import { Todo } from '../entities';

export class TodoRequest {
  readonly text: string;

  readonly done: boolean;

  readonly cardId: number;

  public static toTodo(dto: TodoRequest): Todo {
    const todo = new Todo();
    'text' in dto && (todo.text = dto.text);
    'done' in dto && (todo.done = dto.done);
    'cardId' in dto && (todo.cardId = dto.cardId);

    return todo;
  }
}
