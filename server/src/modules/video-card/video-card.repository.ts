import { EntityRepository, Repository } from 'typeorm';
import { VideoCard } from './video-card.entity';

@EntityRepository(VideoCard)
export class VideoCardRepository extends Repository<VideoCard> {}
