import { APP } from 'config';

export const getOAuthCallbackUrl = (provider) =>
  `${process.env.HOST}${APP.GLOBAL_PREFIX}/auth/${provider}/callback`;
