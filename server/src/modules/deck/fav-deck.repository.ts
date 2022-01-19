import { EntityRepository, Repository } from 'typeorm';
import { FavDeck } from './entities';

@EntityRepository(FavDeck)
export class FavDeckRepository extends Repository<FavDeck> {}
