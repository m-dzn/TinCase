import { User } from '../user.entity';

export class UserSummary {
  email: string;

  nickname: string;

  avatar?: string;

  constructor(user: User) {
    this.email = user.email;
    this.nickname = user.nickname;
    this.avatar = user.avatar;
  }
}
