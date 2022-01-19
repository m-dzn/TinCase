import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PASSPORT } from '../../auth.constants';

@Injectable()
export class JwtAuthGuard extends AuthGuard(PASSPORT.STRATEGY.JWT) {}
