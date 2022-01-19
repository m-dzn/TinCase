import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PASSPORT } from '../../auth.constants';

@Injectable()
export class JwtRefreshAuthGuard extends AuthGuard(
  PASSPORT.STRATEGY.JWT_REFRESH,
) {}
