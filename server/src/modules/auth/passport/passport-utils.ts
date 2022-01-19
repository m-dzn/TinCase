import { APP } from 'config';

export const getOAuthCallbackUrl = (provider) =>
  `${APP.BASE_URL}${APP.GLOBAL_PREFIX}/auth/${provider}/callback`;
