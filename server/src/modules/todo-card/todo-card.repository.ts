import { EntityRepository, Repository } from 'typeorm';

import { TodoCard } from './entities';

@EntityRepository(TodoCard)
export class TodoCardRepository extends Repository<TodoCard> {}
