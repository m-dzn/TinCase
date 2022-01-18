import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string, options: FindOneOptions) {
    return this.findOne({ email }, options);
  }

  validateUser(email: string) {
    return this.createQueryBuilder()
      .select('*')
      .addSelect('password')
      .where('email = :email', { email })
      .getRawOne();
  }
}
