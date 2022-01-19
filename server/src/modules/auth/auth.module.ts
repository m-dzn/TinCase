import { forwardRef, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule, UserRepository } from 'modules/user';
import {
  LocalStrategy,
  JwtStrategy,
  JwtRefreshStrategy,
  KakaoStrategy,
  NaverStrategy,
  GuestStrategy,
} from './passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';
import { AUTH } from './auth.constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: {
        expiresIn: AUTH.ACCESS_TOKEN.EXPIRES_IN,
      },
    }),
  ],
  providers: [
    AuthService,
    TokenService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
    KakaoStrategy,
    NaverStrategy,
    GuestStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
