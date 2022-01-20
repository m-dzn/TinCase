import { User } from '../user.entity';

export class UserSummary {
  id: number;

  email: string;

  nickname: string;

  avatar?: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.nickname = user.nickname;
    this.avatar = user.avatar;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
