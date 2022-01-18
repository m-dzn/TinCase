import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Strategy } from 'passport-local';
import { checkAuthorization } from 'common';
import { User } from 'modules/user';

import { PASSPORT } from '../../auth.constants';
import { AuthService } from '../../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,

    private readonly authService: AuthService,
  ) {
    super({
      usernameField: PASSPORT.USERNAME_FIELD,
    });
  }

  async validate(email: string, password: string): Promise<User> {
    this.logger.log('Passport : Local Strategy ', email);

    const user = await this.authService.validateUser(email, password);

    checkAuthorization(user);

    return user;
  }
}
