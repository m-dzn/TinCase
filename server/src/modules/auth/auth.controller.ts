import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { COMMON_URL, handleSuccess } from 'common';
import { AuthService } from './auth.service';
import { JoinRequest } from './dto';
import { AUTH } from './auth.constants';
import { RequestWithUser } from './interfaces';
import { LocalAuthGuard, KakaoAuthGuard } from './passport';
import { Response } from 'express';

@Controller(COMMON_URL.API.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AUTH.URL.JOIN)
  public async join(@Body() joinRequest: JoinRequest) {
    await this.authService.join(joinRequest);

    return handleSuccess({
      message: '회원가입되었습니다.',
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post(AUTH.URL.LOGIN)
  public async login(@Req() req: RequestWithUser) {
    const user = req.user;
    console.log(user);
  }

  @Get(AUTH.URL.KAKAO)
  @UseGuards(KakaoAuthGuard)
  async kakao() {}

  @Get(AUTH.URL.KAKAO_REDIRECT)
  async kakaoRedirect(
    @Req() req: RequestWithUser,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user = req.user;

    const { accessToken };
  }
}
