import { Todo } from '../entities';

export class TodoDetails {
  readonly text: string;

  readonly done: boolean;

  readonly cardId: number;

  constructor(todo: Todo) {
    this.text = todo.text;
    this.done = todo.done;
    this.cardId = todo.cardId;
  }
}
