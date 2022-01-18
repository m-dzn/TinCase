import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { getOAuthCallbackUrl } from '../passport-utils';
import { SNSProvider, UserRepository } from 'modules/user';
import { Profile, Strategy } from 'passport-naver';

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      clientID: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
      callbackURL: getOAuthCallbackUrl('naver'),
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done,
  ) {
    if (!profile) {
      return null;
    }

    const { id, _json } = profile;

    const snsId = typeof id !== 'string' ? String(id) : id;

    const exUser = await this.userRepository.findOne({
      provider: SNSProvider.NAVER,
      snsId,
    });

    if (exUser) {
      return exUser;
    }

    return this.userRepository.save({
      email: _json && _json.email,
      nickname: _json && _json.nickname,
      password: null,
      provider: SNSProvider.NAVER,
      snsId,
    });
  }
}
