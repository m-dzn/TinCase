const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const {
    getAccessToken,
    sendAccessToken,
    addRefreshToken,
    removeAccessToken,
    getRefreshToken,
} = require("../lib");

const { StatusCodes } = require("http-status-codes");
const { CLIENT } = require("../config");

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
        passport.authenticate(
            "local",
            { session: false },
            (passportError, user, info) => {
                if (passportError || !user) {
                    return res.status(StatusCodes.BAD_REQUEST).json({
                        message: info.message,
                    });
                }

                return req.login(user, { session: false }, (loginError) => {
                    if (loginError) {
                        console.error(loginError);
                        return res
                            .status(StatusCodes.INTERNAL_SERVER_ERROR)
                            .json({ message: "로그인에 실패했습니다." });
                    }

                    const accessToken = getAccessToken(user);
                    const refreshToken = getRefreshToken(user.dataValues.id);
                    addRefreshToken(res, refreshToken);
                    sendAccessToken(res, accessToken);
                });
            }
        )(req, res, next);
    },

    logout: (req, res, next) => {
        removeAccessToken(req, res);
    },

    google: passport.authenticate("google", {
        session: false,
        scope: ["email", "profile"],
    }),

    googleCallback: (req, res, next) => {
        console.log("[googleCallback]");
        passport.authenticate(
            "google",
            { session: false },
            (err, user, info) => {
                sendAccessToken(res, info.accessToken);
            }
        )(req, res, next);
    },

    kakao: passport.authenticate("kakao", { session: false }),

    kakaoCallback: (req, res, next) => {
        console.log("[kakaoCallback]");
        passport.authenticate(
            "kakao",
            { session: false },
            (err, user, info) => {
                sendAccessToken(
                    res,
                    info.accessToken,
                    CLIENT.OAUTH_REDIRECT_URL
                );
            }
        )(req, res, next);
    },
};
