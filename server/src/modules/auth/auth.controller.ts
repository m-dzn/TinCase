import {
  Body,
  Controller,
  Get,
  Inject,
  LoggerService,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { handleSuccess } from 'common';
import { AuthService } from './auth.service';
import { JoinRequest } from './dto';
import { RequestWithUser } from './interfaces';
import { Response } from 'express';
import { TokenService } from './token.service';
import { APP } from 'config';
import { User, UserSummary } from 'modules/user';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import {
  JwtAuthGuard,
  JwtRefreshAuthGuard,
  KakaoAuthGuard,
  LocalAuthGuard,
  NaverAuthGuard,
} from 'modules/auth';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Post('join')
  public async join(@Body() joinRequest: JoinRequest) {
    await this.authService.join(joinRequest);

    return handleSuccess({
      message: '회원가입되었습니다.',
    });
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  public async login(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = await this.getUserWithJwtTokens(req, res);

    return new UserSummary(user);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req, @Res() res) {
    const user: User = req.user;

    await this.tokenService.removeRefreshToken(user.id);

    res
      .clearCookie(APP.COOKIE.ACCESS_TOKEN)
      .clearCookie(APP.COOKIE.REFRESH_TOKEN)
      .json({ message: '로그아웃 되었습니다.' });
  }

  @Get('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refresh(@Req() req, @Res({ passthrough: true }) res) {
    const user: User = req.user;
    const { accessToken, ...accessOption } =
      await this.tokenService.getAccessToken(user);
    res.cookie(APP.COOKIE.ACCESS_TOKEN, accessToken, accessOption);

    return handleSuccess({
      message: '토큰이 재발급 되었습니다.',
    });
  }

  @Get('kakao')
  @UseGuards(KakaoAuthGuard)
  async kakao() {
    // Passport : 카카오 아이디 로그인 서비스로 리다이렉트
  }

  @Get('kakao/callback')
  @UseGuards(KakaoAuthGuard)
  async kakaoCallback(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.getUserWithJwtTokens(req, res);
  }

  @Get('naver')
  @UseGuards(NaverAuthGuard)
  async naver() {
    // Passport : 네이버 아이디 로그인 서비스로 리다이렉트
  }

  @Get('naver/callback')
  @UseGuards(NaverAuthGuard)
  async naverCallback(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.getUserWithJwtTokens(req, res);

    return res.redirect(process.env.CLIENT_BASE_URL);
  }

  // private 메소드
  private async getUserWithJwtTokens(req: RequestWithUser, res: Response) {
    const user = req.user;

    const { accessToken, ...accessOption } =
      await this.tokenService.getAccessToken(user);
    const { refreshToken, ...refreshOption } =
      await this.tokenService.getRefreshToken(user);

    res.cookie(APP.COOKIE.ACCESS_TOKEN, accessToken, accessOption);
    res.cookie(APP.COOKIE.REFRESH_TOKEN, refreshToken, refreshOption);

    return user;
  }
}
