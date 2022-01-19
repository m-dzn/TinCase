import { EntityRepository, FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByEmail(email: string, options: FindOneOptions) {
    return this.findOne({ email }, options);
  }

  findUserWithPassword(email: string) {
    return this.createQueryBuilder('user')
      .addSelect('user.password', 'user_password')
      .where('email = :email', { email })
      .getOne();
  }
}
