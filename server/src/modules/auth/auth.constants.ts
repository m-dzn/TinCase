export const AUTH = {
  SALT: 10,
  URL: {
    JOIN: '/join',
    LOGIN: '/login',
    KAKAO: '/kakao',
    KAKAO_REDIRECT: '/kakao/redirect',
  },
  ACCESS_TOKEN: { EXPIRES_IN: '1h' },
  REFRESH_TOKEN: { EXPIRES_IN: '14d' },
};

export const PASSPORT = {
  USERNAME_FIELD: 'email',
};
