import { CardRequest } from 'modules/card';
import { TodoCard } from '../entities';

export class TodoCardRequest extends CardRequest {
  public static toTodoCard(dto: TodoCardRequest): TodoCard {
    const todoCard = new TodoCard();
    return todoCard;
  }
}
