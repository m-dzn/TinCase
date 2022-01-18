import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { UserRepository } from 'modules/user';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { DeckRequest, DeckResponse } from './dto';
import { DeckRepository } from 'modules/deck';

@Injectable()
export class DeckService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly deckRepository: DeckRepository,

    private readonly userRepository: UserRepository,
  ) {}

  public async create(deckDto: DeckRequest, userId: number) {
    const user = await this.userRepository.findOne(userId);

    if (!user) {
      throw new HttpException(
        '덱을 생성할 권한이 없습니다.',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const newDeck = DeckRequest.toDeck(deckDto, user);
    await this.deckRepository.save(newDeck);
  }

  public async read(deckId: number) {
    const deck = await this.deckRepository.findOne(deckId);

    if (!deck) {
      throw new HttpException('덱을 찾을 수 없습니다.', HttpStatus.NOT_FOUND);
    }

    return DeckResponse.of(deck);
  }

  public async update(deckId: number, deckDto: DeckRequest) {
    const result = await this.deckRepository.update(deckId, deckDto);

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
