const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const passport = require("passport");

module.exports = {
    me: (req, res, next) => {
        const user = req.user;
        return res.status(StatusCodes.OK).json({
            id: user.dataValues.id,
            email: user.dataValues.email,
            nickname: user.dataValues.nickname,
            provider: user.dataValues.provider,
        });
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
