import { Controller } from '@nestjs/common';
import { Deck } from './deck.entity';
import { DeckService } from './deck.service';

@Controller('decks')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}
}
