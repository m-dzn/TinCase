const passport = require("passport");
const jwtStrategy = require("./jwtStrategy");
const localStrategy = require("./localStrategy");
const googleStrategy = require("./googleStrategy");
const kakaoStrategy = require("./kakaoStrategy");

module.exports = (app) => {
    // express 미들웨어에 passport 등록
    app.use(passport.initialize());

    passport.serializeUser((user, done) => {
        console.log("[serializeUser]");
        done(null, user.id);
    });

    passport.deserializeUser((user, done) => {
        console.log("[deserializeUser]");
        done(null, user.id);
    });

    // passport.deserializeUser(async (id, done) => {
    //     const exUser = await User.findOne({ where: { id } })
    //         .then((user) => done(null, user))
    //         .catch((err) => done(err));

    //     done(null, exUser);
    // });

    passport.use("local", localStrategy);
    passport.use("jwt", jwtStrategy);
    passport.use("google", googleStrategy);
    passport.use("kakao", kakaoStrategy);
};
