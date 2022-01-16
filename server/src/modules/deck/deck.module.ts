import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'modules/user';

import { Deck } from './entities';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Deck, User])],
  providers: [DeckService],
  controllers: [DeckController],
  exports: [DeckService],
})
export class DeckModule {}
