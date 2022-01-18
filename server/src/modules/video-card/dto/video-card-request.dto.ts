import { CardRequest } from 'modules/card';
import { VideoProvider } from '../video-card.constants';
import { VideoCard } from '../video-card.entity';

export class VideoCardRequest extends CardRequest {
  url?: string;

  videoProvider?: VideoProvider;

  public static toVideoCard(dto: VideoCardRequest): VideoCard {
    const videoCard = new VideoCard();
    'url' in dto && (videoCard.url = dto.url);
    'videoProvider' in dto && (videoCard.videoProvider = dto.videoProvider);

    return videoCard;
  }
}
