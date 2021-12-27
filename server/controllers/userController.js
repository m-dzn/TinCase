const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const passport = require("passport");

module.exports = {
    me: async (req, res, next) => {
        console.log("me 진입 1차");
        passport.authenticate(
            "jwt",
            { session: false },
            (passportError, user, info) => {
                console.log("me 진입 2차", passportError, user, info);
                if (passportError || !user) {
                    return res.status(StatusCodes.BAD_REQUEST).json({
                        message: info.message,
                    });
                }

                console.log("me", user);

                const { id } = req.user;
                if (user) {
                    return res.status(StatusCodes.OK).json({
                        id: user.id,
                        email: user.email,
                        nickname: user.nickname,
                        provider: user.provider,
                    });
                } else {
                    return res
                        .status(StatusCodes.NOT_FOUND)
                        .json({ message: "회원 정보를 찾을 수 없습니다." });
                }
            }
            //  catch (err) {
            //     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            //         message: "내 정보 조회 중 오류가 발생했습니다.",
            //     });
            // }
        )(req, res, next);
    },

    update: (req, res) => {
        console.log("update 로직");
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await User.destroy({ where: { id } });

            if (result === 1) {
                return res
                    .status(StatusCodes.OK)
                    .json({ message: "회원 탈퇴되었습니다." });
            } else {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "회원 정보를 찾을 수 없습니다.",
                });
            }
        } catch (err) {
            console.err(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "회원 탈퇴가 정상적으로 이루어지지 않았습니다.",
            });
        }
    },
};
