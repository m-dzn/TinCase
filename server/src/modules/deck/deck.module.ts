import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'modules/user';

import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckRepository } from './deck.repository';
import { CardInDeckRepository } from './card-in-deck.repository';
import { FavDeckRepository } from './fav-deck.repository';
import { CardRepository } from 'modules/card';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DeckRepository,
      CardRepository,
      CardInDeckRepository,
      FavDeckRepository,
      UserRepository,
    ]),
  ],
  providers: [DeckService],
  controllers: [DeckController],
  exports: [DeckService],
})
export class DeckModule {}
