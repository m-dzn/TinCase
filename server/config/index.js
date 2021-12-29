const DEV_ENV = "development";
const NODE_ENV = process.env.NODE_ENV || DEV_ENV;
const dbConfig = require("./db-config.json")[NODE_ENV];

const getOAuthCallbackURL = (provider) =>
    `${process.env.HOST}/api/auth/${provider}/callback`;

const config = {
    DEV_ENV,
    NODE_ENV,

    HOST: process.env.HOST,
    PORT: process.env.PORT || 5000,

    // Cookie
    COOKIE: {
        SECRET: process.env.COOKIE_SECRET,
    },

    // db
    DB: {
        username: dbConfig.username,
        password: dbConfig.password,
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        database: dbConfig.database,
    },

    // OAuth2.0
    OAUTH: {
        GOOGLE: {
            CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
            CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
            CALLBACK_URL: getOAuthCallbackURL("google"),
        },
        KAKAO: {
            CLIENT_ID: process.env.KAKAO_REST_API_KEY,
            CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
            CALLBACK_URL: getOAuthCallbackURL("kakao"),
            TOKEN_API: "https://kauth.kakao.com/oauth/token",
        },
        NAVER: {
            CLIENT_ID: process.env.NAVER_CLIENT_ID,
            CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
            CALLBACK_URL: getOAuthCallbackURL("naver"),
        },
    },

    // Client
    CLIENT: {
        BASE_URL: process.env.CLIENT_BASE_URL,
        OAUTH_REDIRECT_URL: process.env.CLIENT_OAUTH_REDIRECT_URL,
        LOGIN_FAILURE_URL: process.env.LOGIN_FAILURE_URL,
    },

    ACCESS_ALLOWED_URL: [process.env.CLIENT_BASE_URL],
};

module.exports = config;
