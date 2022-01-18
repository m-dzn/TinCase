import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule, UserRepository } from 'modules/user';
import { LocalStrategy } from './passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from './token.service';
import { RefreshTokenRepository } from './refresh-token.repository';
import { JwtModule } from '@nestjs/jwt';
import { AUTH } from './auth.constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, RefreshTokenRepository]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: AUTH.ACCESS_TOKEN.EXPIRES_IN,
      },
    }),
  ],
  providers: [AuthService, TokenService, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
