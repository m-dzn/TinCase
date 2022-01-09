const { StatusCodes } = require("http-status-codes");
const { CLIENT } = require("../../config");

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.status(StatusCodes.FORBIDDEN).json({
                message: "로그인 해주세요.",
            });
        }
    },

    isNotLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            next();
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "이미 로그인되어 있습니다.",
            });
        }
    },
};
