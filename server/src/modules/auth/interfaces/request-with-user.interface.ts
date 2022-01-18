import { Request } from 'express';
import { User } from 'modules/user';

export interface RequestWithUser extends Request {
  user: User;
}
