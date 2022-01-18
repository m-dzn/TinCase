import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'modules/user';
import { AUTH } from './auth.constants';
import { RefreshTokenRepository } from './refresh-token.repository';
import { RefreshToken } from './entities';

@Injectable()
export class TokenService {
  constructor(
    private readonly refreshTokenRepository: RefreshTokenRepository,

    private readonly jwtService: JwtService,
  ) {}
  // JWT
  public getAccessToken(user: User) {
    const payload = { id: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      accessTokenOptions: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: Number(process.env.JWT_EXPIRES_IN) * 1000,
        signed: true,
        secure: false,
      },
    };
  }

  public async getRefreshToken(user: User) {
    const payload = { id: user.id };

    const refreshToken = new RefreshToken();
    refreshToken.user = user;
    refreshToken.refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_TOKEN_SECRET,
      expiresIn: AUTH.REFRESH_TOKEN.EXPIRES_IN,
    });

    await this.refreshTokenRepository.save(refreshToken);

    return {
      refreshToken,
      refreshTokenOptions: {
        domain: 'localhost',
        path: '/',
        httpOnly: true,
        maxAge: Number(),
        signed: true,
        secure: false,
      },
    };
  }
}
