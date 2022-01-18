import { Card, CardDetails } from 'modules/card';
import { TodoCard } from '../entities';
import { TodoDetails } from './todo-details.dto';

export class TodoCardDetails extends CardDetails {
  todos?: TodoDetails[];

  constructor(card: Card, todoCard: TodoCard) {
    super(card);
    this.todos = todoCard.todos.map((todo) => new TodoDetails(todo));
  }
}
