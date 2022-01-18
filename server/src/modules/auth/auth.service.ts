import {
  Injectable,
  HttpException,
  HttpStatus,
  Inject,
  LoggerService,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import * as bcrypt from 'bcryptjs';
import { UserRepository, UserSummary } from 'modules/user';

import { JoinRequest } from './dto';
import { AUTH } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly userRepository: UserRepository,
  ) {}

  public async join(joinRequest: JoinRequest): Promise<UserSummary> {
    const exUser = await this.userRepository.findOne({
      where: { email: joinRequest.email },
    });

    if (exUser) {
      throw new HttpException('이미 등록된 사용자입니다.', HttpStatus.CONFLICT);
    }

    const salt: string = await bcrypt.genSalt(AUTH.SALT);
    const hash: string = await bcrypt.hash(joinRequest.password, salt);

    const newUser = await this.userRepository.save({
      email: joinRequest.email,
      nickname: joinRequest.nickname,
      password: hash,
    });

    return new UserSummary(newUser);
  }

  public async validateUser(email: string, password: string) {
    try {
      const user = await this.userRepository.validateUser(email);

      await this.verifyPassword(password, user.password);
      user.password = null;

      return user;
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        '잘못된 인증 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async verifyPassword(plainPassword: string, hashedPassword: string) {
    const isPasswordMatched = await bcrypt.compare(
      plainPassword,
      hashedPassword,
    );

    if (!isPasswordMatched) {
      throw new HttpException(
        '잘못된 인증 정보입니다.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
