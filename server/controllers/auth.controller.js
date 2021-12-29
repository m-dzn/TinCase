const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const { StatusCodes } = require("http-status-codes");
const { CLIENT } = require("../config");

const oauthPassportOptions = {
    successRedirect: CLIENT.OAUTH_REDIRECT_URL,
    failureRedirect: CLIENT.LOGIN_FAILURE_URL,
};

module.exports = {
    register: async (req, res) => {
        const { email, nickname, password } = req.body;

        try {
            const exUser = await User.findOne({ where: { email } });
            if (exUser) {
                return res.status(StatusCodes.CONFLICT).json({
                    message: "이미 가입된 이메일입니다.",
                });
            }

            const hash = await bcrypt.hash(password, 12);

            await User.create({
                email,
                nickname,
                password: hash,
            });

            return res
                .status(StatusCodes.CREATED)
                .json({ message: "회원 가입되었습니다." });
        } catch (err) {
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "회원 가입이 정상적으로 이루어지지 않았습니다.",
            });
        }
    },

    login: (req, res, next) => {
        passport.authenticate("local", (passportError, user, info) => {
            if (passportError || !user) {
                return res.status(StatusCodes.BAD_REQUEST).json({
                    message: info.message,
                });
            }

            return req.login(user, (loginError) => {
                if (loginError) {
                    console.error(loginError);
                    return res
                        .status(StatusCodes.INTERNAL_SERVER_ERROR)
                        .json({ message: "로그인에 실패했습니다." });
                }

                console.log("로그인 성공");
                res.json({ message: "로그인 되었습니다." });
            });
        })(req, res, next);
    },

    logout: (req, res, next) => {
        req.logout();
        req.session.destroy();
        res.json({ message: "로그아웃 되었습니다." });
    },

    google: passport.authenticate("google", {
        scope: ["email", "profile"],
    }),

    googleCallback: (req, res, next) => {
        console.log("[googleCallback]");
        passport.authenticate("google", oauthPassportOptions)(req, res, next);
    },

    kakao: passport.authenticate("kakao"),

    kakaoCallback: (req, res, next) => {
        console.log("[kakaoCallback]");
        passport.authenticate("kakao", oauthPassportOptions)(req, res, next);
    },

    naver: passport.authenticate("naver"),

    naverCallback: (req, res, next) => {
        console.log("naverCallback");
        passport.authenticate("naver", oauthPassportOptions)(req, res, next);
    },
};
