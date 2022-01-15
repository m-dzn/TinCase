import { EntityRepository, Repository } from 'typeorm';
import { Card } from 'modules/card/card.entity';

@EntityRepository(Card)
export class CardRepository extends Repository<Card> {}
