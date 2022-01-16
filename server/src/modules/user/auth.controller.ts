import { Body, Controller, Post } from '@nestjs/common';
import { handleSuccess } from 'common';
import { UserDTO } from './dto';
import { UserService } from './user.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('sign-up')
  public async signUp(@Body() userDTO: UserDTO) {
    await this.userService.signUp(userDTO);

    return handleSuccess({
      message: '회원가입되었습니다.',
    });
  }
}
