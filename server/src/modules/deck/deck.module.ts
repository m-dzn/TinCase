import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'modules/user';

import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckRepository } from './deck.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DeckRepository, UserRepository])],
  providers: [DeckService],
  controllers: [DeckController],
  exports: [DeckService],
})
export class DeckModule {}
