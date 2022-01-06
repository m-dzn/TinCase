const DEV_ENV = "development";
const NODE_ENV = process.env.NODE_ENV || DEV_ENV;
const dbConfig = require("./db-config.json")[NODE_ENV];
const constraints = require("./constraints");

const API_VERSION = "/v1";

const getOAuthCallbackURL = (provider) =>
    `${process.env.HOST}${API_VERSION}/auth/${provider}/callback`;

const CONFIG = {
    DEV_ENV,
    NODE_ENV,

    HOST: process.env.HOST,
    PORT: process.env.PORT || 5000,
    API_VERSION,

    // Cookie
    COOKIE: {
        SECRET: process.env.COOKIE_SECRET,
    },

    // DB
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

    constraints,

    // Card
    CARD: {
        TYPE: {
            TODO: "TODO",
            VIDEO_LINK: "VIDEO_LINK",
            MEMO: "MEMO",
        },
    },
};

module.exports = CONFIG;
