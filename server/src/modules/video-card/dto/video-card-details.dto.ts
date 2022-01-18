import { Card, CardDetails } from 'modules/card';
import { VideoCard } from '../video-card.entity';
import { VideoProvider } from '../video-card.constants';

export class VideoCardDetails extends CardDetails {
  url?: string;

  videoProvider?: VideoProvider;

  constructor(card: Card, videoCard: VideoCard) {
    super(card);
    this.url = videoCard.url;
    this.videoProvider = videoCard.videoProvider;
  }
}
