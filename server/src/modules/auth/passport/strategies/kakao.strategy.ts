import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { getOAuthCallbackUrl } from '../passport-utils';
import { Profile, Strategy } from 'passport-kakao';
import { SNSProvider, UserRepository } from 'modules/user';

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      clientID: process.env.KAKAO_REST_API_KEY,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: getOAuthCallbackUrl('kakao'),
      scope: ['profile_nickname', 'profile_image', 'account_email'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done,
  ): Promise<any> {
    const { id, _json } = profile;

    if (!profile) {
      return null;
    }

    const snsId: string = typeof id !== 'string' ? String(id) : id;

    const exUser = await this.userRepository.findOne({
      provider: SNSProvider.KAKAO,
      snsId,
    });

    if (exUser) {
      return exUser;
    }

    return this.userRepository.save({
      email: _json.kakao_account.has_email && _json.kakao_account.email,
      nickname: _json.properties.nickname,
      password: null,
      provider: SNSProvider.KAKAO,
      snsId: snsId,
    });
  }
}
