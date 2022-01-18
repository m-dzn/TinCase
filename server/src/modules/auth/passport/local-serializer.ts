import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User, UserRepository } from 'modules/user';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    console.log(user);
    done(null, user.id);
  }

  async deserializeUser(userId: number, done: CallableFunction) {
    const user = this.userRepository.findOne({
      where: { id: userId },
    });

    console.log(user);

    if (!user) {
      return null;
    }

    done(null, user);
  }
}
