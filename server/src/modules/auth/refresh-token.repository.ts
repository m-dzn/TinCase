import { EntityRepository, Repository } from 'typeorm';
import { RefreshToken } from './entities';

@EntityRepository(RefreshToken)
export class RefreshTokenRepository extends Repository<RefreshToken> {}
