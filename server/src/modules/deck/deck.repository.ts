import { EntityRepository, Repository } from 'typeorm';

import { Deck } from './entities';

@EntityRepository(Deck)
export class DeckRepository extends Repository<Deck> {}
