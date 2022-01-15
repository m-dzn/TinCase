import { EntityRepository, Repository } from 'typeorm';
import { Deck } from './deck.entity';

@EntityRepository(Deck)
export class DeckRepository extends Repository<Deck> {}
