import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'modules/user';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Repository } from 'typeorm';
import { Deck } from './entities';
import { DeckRequest, DeckResponse } from './dto';

@Injectable()
export class DeckService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    @InjectRepository(Deck)
    private readonly deckRepository: Repository<Deck>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(deckDTO: DeckRequest, userId: number) {
    const user = await this.userRepository.findOne(userId);

    if (!user) {
      throw new HttpException(
        '덱을 생성할 권한이 없습니다.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const newDeck = DeckRequest.toDeck(deckDTO, user);
    await this.deckRepository.save(newDeck);
  }

  public async read(deckId: number) {
    const deck = await this.deckRepository.findOne(deckId);

    if (!deck) {
      throw new HttpException('덱을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }

    return DeckResponse.of(deck);
  }

  public async update(deckId: number, deckDTO: DeckRequest) {
    const result = await this.deckRepository.update(deckId, deckDTO);

    if (!result.affected) {
      throw new HttpException('덱을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
  }

  public async delete(deckId: number) {
    const result = await this.deckRepository.delete(deckId);

    if (!result.affected) {
      throw new HttpException('덱을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }
  }

  public async getList() {
    return this.deckRepository.find();
  }
}
