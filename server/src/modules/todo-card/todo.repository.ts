import { EntityRepository, Repository } from 'typeorm';

import { Todo } from './entities';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {}
