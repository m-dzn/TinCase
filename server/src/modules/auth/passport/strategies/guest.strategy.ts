import { Inject, Injectable, LoggerService } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { Strategy } from 'passport-custom';
import { PASSPORT } from '../../auth.constants';

@Injectable()
export class GuestStrategy extends PassportStrategy(
  Strategy,
  PASSPORT.STRATEGY.GUEST,
) {
  constructor(
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    super();
  }

  async validate(payload: any, done: any) {
    this.logger.log('Guest Strategy validate');

    done(null, {});
  }
}
