import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { PASSPORT } from '../../auth.constants';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { TokenService } from '../../token.service';
import { APP } from 'config';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  PASSPORT.STRATEGY.JWT_REFRESH,
) {
  constructor(private readonly tokenService: TokenService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          return request?.cookies && request.cookies[APP.COOKIE.REFRESH_TOKEN];
        },
      ]),
      secretOrKey: process.env.JWT_REFRESH_TOKEN_SECRET,
      passReqToCallback: true,
    });
  }

  async validate(req, payload) {
    const refreshToken = req.cookies[APP.COOKIE.REFRESH_TOKEN];
    return this.tokenService.getUserByRefreshToken(payload.id, refreshToken);
  }
}
