const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { handleAsyncException, CustomError } = require("../lib");
const { userService } = require("../services");

module.exports = {
    me: (req, res, next) => {
        console.log("/users/me");
        const user = req.user;

        res.json({
            id: user.id,
            email: user.email,
            nickname: user.nickname,
            provider: user.provider,
        });
    },

    update: (req, res) => {
        console.log("update 로직");
    },

    unregister: handleAsyncException(async (req, res) => {
        const { id } = req.user;

        await userService.unregister(id);

        res.json({
            message: "회원 탈퇴되었습니다.",
        });
    }, "회원 탈퇴가 정상적으로 이루어지지 않았습니다."),
};
