import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Card } from 'modules/card';
import { VIDEO_CARD, VideoProvider } from './video-card.constants';

@Entity()
export class VideoCard {
  @PrimaryColumn()
  cardId?: number;

  @OneToOne(() => Card, { primary: true, onDelete: 'CASCADE' })
  @JoinColumn()
  card?: Card;

  @Column({
    length: VIDEO_CARD.URL.MAX_LENGTH,
  })
  url!: string;

  @Column({
    type: 'enum',
    enum: VideoProvider,
  })
  videoProvider!: VideoProvider;
}
