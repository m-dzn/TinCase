import { HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'modules/user';

export const checkCondition = (
  condition: boolean,
  errorMessage: string,
  status?: number,
) => {
  if (!condition) {
    throw new HttpException(errorMessage, status || HttpStatus.NOT_FOUND);
  }
};

export const checkExistance = (
  data: object,
  errorMessage: string,
  status?: number,
) => {
  checkCondition(!!data, errorMessage, status);
};

export const isOwned = (ownerId: number, userId: number) => {
  checkAuthorization(ownerId === userId);
};

export const checkAuthorization = (user: User | boolean) => {
  if (!!!user) {
    throw new HttpException('접근 권한이 없습니다.', HttpStatus.UNAUTHORIZED);
  }
};
