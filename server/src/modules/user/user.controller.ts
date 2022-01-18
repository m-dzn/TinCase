import { Controller } from '@nestjs/common';
import { COMMON_URL } from 'common';
import { UserService } from './user.service';

@Controller(COMMON_URL.API.USER)
export class UserController {
  constructor(private readonly userService: UserService) {}
}
