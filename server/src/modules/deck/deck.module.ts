import { Module } from '@nestjs/common';
import { DeckController } from './deck.controller';
import { DeckService } from './deck.service';

@Module({
  imports: [],
  providers: [DeckService],
  controllers: [DeckController],
})
export class DeckModule {}
