import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PASSPORT } from '../../auth.constants';

@Injectable()
export class JwtAuthOrGuestGuard extends AuthGuard([
  PASSPORT.STRATEGY.JWT,
  PASSPORT.STRATEGY.GUEST,
]) {}
