import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemoCardService } from './memo-card.service';
import { MemoCardRepository } from './memo-card.repository';
import { CardRepository } from 'modules/card';
import { UserRepository } from 'modules/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MemoCardRepository,
      CardRepository,
      UserRepository,
    ]),
  ],
  controllers: [],
  providers: [MemoCardService],
  exports: [MemoCardService],
})
export class MemoCardModule {}
