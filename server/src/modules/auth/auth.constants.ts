export const AUTH = {
  SALT: 10,
  ACCESS_TOKEN: { EXPIRES_IN: '1h' },
  REFRESH_TOKEN: { EXPIRES_IN: '14d' },
};

export const PASSPORT = {
  USERNAME_FIELD: 'email',
  STRATEGY: {
    LOCAL: 'local',
    JWT: 'jwt',
    JWT_REFRESH: 'jwt-refresh',
    KAKAO: 'kakao',
    NAVER: 'naver',
    GUEST: 'guest',
  },
};
