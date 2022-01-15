export const USER = {
  EMAIL: {
    MAX_LENGTH: 40,
  },
  NICKNAME: {
    MAX_LENGTH: 15,
  },
  PASSWORD: {
    MAX_LENGTH: 255,
  },
  AVATAR: {
    MAX_LENGTH: 255,
  },
  SNS_ID: {
    MAX_LENGTH: 30,
  },
};

export enum SNSProvider {
  LOCAL = 'LOCAL',
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
}
