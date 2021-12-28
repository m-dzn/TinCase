const passport = require("passport");
const { StatusCodes } = require("http-status-codes");
const { ACCESS_ALLOWED_URL } = require("../../config");
const { trimUrl } = require("../stringUtils");

module.exports = {
    isLoggedIn: (req, res, next) => {
        const isAllowedReferer = ACCESS_ALLOWED_URL.some(
            (url) => trimUrl(url) === trimUrl(req.headers.referer)
        );

        // 허용되지 않은 referer에서 온 요청을 차단합니다.
        if (!isAllowedReferer) {
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: "잘못된 요청입니다.",
            });
        }

        passport.authenticate(
            "jwt",
            { session: false },
            async (passportError, user, info) => {
                if (passportError) {
                    return res.status(StatusCodes.UNAUTHORIZED).json({
                        message: info.message,
                    });
                }

                if (user) {
                    req.user = user;
                    next();
                } else {
                    res.status(StatusCodes.UNAUTHORIZED).json({
                        message: "로그인이 필요합니다.",
                    });
                }
            }
        )(req, res, next);
    },
};
