import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { checkExistance } from 'common';
import { User, UserRepository } from 'modules/user';
import { AUTH } from './auth.constants';

@Injectable()
export class TokenService {
  constructor(
    private readonly userRepository: UserRepository,

    private readonly jwtService: JwtService,
  ) {}
  // JWT
  public async getAccessToken(user: User) {
    const payload = { id: user.id };
    return {
      accessToken: this.jwtService.sign(payload, {
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      }),
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(process.env.JWT_EXPIRES_IN) * 1000,
      signed: true,
      secure: false,
    };
  }

  public async getRefreshToken(user: User) {
    const refreshToken = this.jwtService.sign(
      { id: user.id },
      {
        secret: process.env.JWT_REFRESH_TOKEN_SECRET,
        expiresIn: AUTH.REFRESH_TOKEN.EXPIRES_IN,
      },
    );

    await this.userRepository.update(user.id, {
      refreshToken,
    });

    return {
      refreshToken,
      domain: 'localhost',
      path: '/',
      httpOnly: true,
      maxAge: Number(process.env.JWT_EXPIRES_IN) * 1000,
      signed: true,
      secure: false,
    };
  }

  public async removeRefreshToken(id: number) {
    return this.userRepository.update(id, {
      refreshToken: null,
    });
  }

  public async getUserByRefreshToken(userId: number, refreshToken: string) {
    const user = await this.userRepository.findOne(userId);

    checkExistance(user, '사용자 인증 중 알 수 없는 오류가 발생했습니다.');

    const isTokenValid = await compare(refreshToken, user.refreshToken);

    if (isTokenValid) {
      return user;
    } else {
      throw new HttpException('잘못된 접근입니다.', HttpStatus.UNAUTHORIZED);
    }
  }
}
