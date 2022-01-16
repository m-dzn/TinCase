import { EntityRepository, Repository } from 'typeorm';
import { MemoCard } from './memo-card.entity';

@EntityRepository(MemoCard)
export class MemoCardRepository extends Repository<MemoCard> {}
