import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { checkAuthorization } from 'common';
import { APP } from 'config';
import { PASSPORT } from '../../auth.constants';
import { UserRepository } from 'modules/user';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  PASSPORT.STRATEGY.JWT,
) {
  constructor(private readonly userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => request?.signedCookies[APP.COOKIE.ACCESS_TOKEN],
      ]),
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
    });
  }

  async validate(payload: any, done: any) {
    const user = await this.userRepository.findOne({ id: payload.id });
    checkAuthorization(user);

    done(null, user);
  }
}
