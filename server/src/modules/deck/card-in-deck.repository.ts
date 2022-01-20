import { EntityRepository, Repository } from 'typeorm';
import { CardInDeck } from './entities';

@EntityRepository(CardInDeck)
export class CardInDeckRepository extends Repository<CardInDeck> {}
