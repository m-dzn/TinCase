import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { handleSuccess } from 'common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public async signUp(@Body() userDTO: UserDTO) {
    await this.userService.signUp(userDTO);

    return handleSuccess({
      status: HttpStatus.CREATED,
      message: '회원가입되었습니다.',
    });
  }
}
