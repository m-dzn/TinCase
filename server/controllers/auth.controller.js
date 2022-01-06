const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const { StatusCodes } = require("http-status-codes");
const { CLIENT } = require("../config");
const { CustomError, handleAsyncException } = require("../lib");

const oauthPassportOptions = {
    successRedirect: CLIENT.OAUTH_REDIRECT_URL,
    failureRedirect: CLIENT.LOGIN_FAILURE_URL,
};

module.exports = {
    register: handleAsyncException(async (req, res) => {
        const { email, nickname, password } = req.body;
        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            next(
                new CustomError(
                    "이미 가입된 이메일입니다.",
                    StatusCodes.CONFLICT
                )
            );
        }

        const hash = await bcrypt.hash(password, 12);

        await User.create({
            email,
            nickname,
            password: hash,
        });

        res.status(StatusCodes.CREATED).json({
            message: "회원 가입되었습니다.",
        });
    }, "회원 가입이 정상적으로 이루어지지 않았습니다."),

    login: handleAsyncException(async (req, res, next) => {
        passport.authenticate("local", (passportError, user, info) => {
            if (passportError || !user) {
                next(new CustomError(info.message, StatusCodes.BAD_REQUEST));
            }

            return req.login(user, (loginError) => {
                if (loginError) {
                    next(
                        new CustomError(
                            "로그인에 실패했습니다.",
                            StatusCodes.INTERNAL_SERVER_ERROR
                        )
                    );
                }

                res.json({ message: "로그인 되었습니다." });
            });
        })(req, res, next);
    }),

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
