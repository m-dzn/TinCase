import { EntityRepository, Repository } from 'typeorm';

import { Todo } from './todo-card.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
