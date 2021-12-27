const NODE_ENV = process.env.NODE_ENV || "development";
const dbConfig = require("./db-config.json")[NODE_ENV];

const getOAuthCallbackURL = (provider) =>
    `${process.env.HOST}/api/auth/${provider}/callback`;

const config = {
    NODE_ENV,

    HOST: process.env.HOST,
    PORT: process.env.PORT || 5000,

    // Cookie
    COOKIE: {
        SECRET: process.env.COOKIE_SECRET,
        KEY: {
            ACCESS_TOKEN: "access_token",
        },
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
        },
        NAVER: {
            CLIENT_ID: process.env.NAVER_CLIENT_ID,
            CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
            CALLBACK_URL: [getOAuthCallbackURL("naver")],
        },
    },

    // JWT
    JWT: {
        SECRET: process.env.JWT_SECRET,
        EXPIRATION: 60 * 60,
    },

    // Client
    CLIENT: {
        BASE_URL: process.env.CLIENT_BASE_URL,
        OAUTH_REDIRECT_URL: process.env.CLIENT_OAUTH_REDIRECT_URL,
    },
};

module.exports = config;
