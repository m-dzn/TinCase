import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, GetUser } from 'modules/auth';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  public async me(@GetUser() user: User) {
    return user;
  }
}
