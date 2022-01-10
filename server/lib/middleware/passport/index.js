const passport = require("passport");
const localStrategy = require("./localStrategy");
const googleStrategy = require("./googleStrategy");
const kakaoStrategy = require("./kakaoStrategy");
const { User } = require("../../../models");
const naverStrategy = require("./naverStrategy");

module.exports = (app) => {
    // express 미들웨어에 passport 등록
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser((user, done) => {
        console.log("[serializeUser]");
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        console.log("[deserializeUser]");
        done(null, user);
    });

    passport.use("local", localStrategy);
    passport.use("google", googleStrategy);
    passport.use("kakao", kakaoStrategy);
    passport.use("naver", naverStrategy);
};
