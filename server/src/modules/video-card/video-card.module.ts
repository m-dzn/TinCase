import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoCardService } from './video-card.service';
import { VideoCard } from './video-card.entity';
import { Card } from 'modules/card';

@Module({
  imports: [TypeOrmModule.forFeature([VideoCard, Card])],
  providers: [VideoCardService],
  exports: [VideoCardService],
})
export class VideoCardModule {}
