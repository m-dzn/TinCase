import { Card } from '../card.entity';
import { CardRequest, CardDetails } from '../dto';

export interface CardTypeService {
  create(dto: CardRequest, userId: number): Promise<void>;

  read(card: Card): Promise<CardDetails>;

  update(cardId: number, dto: CardRequest, userId: number): Promise<void>;
}
