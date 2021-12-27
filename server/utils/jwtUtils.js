const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { JWT, COOKIE } = require("../config");

module.exports = {
    getAccessToken: (user) => {
        const { id } = user;

        try {
            return jwt.sign({ id }, JWT.SECRET, {
                expiresIn: JWT.EXPIRATION,
            });
        } catch (err) {
            console.error("JWT 액세스 토큰을 가져올 수 없습니다.");
        }
    },

    sendAccessToken: (res, accessToken, redirectURL) => {
        res.cookie(COOKIE.KEY.ACCESS_TOKEN, accessToken, {
            httpOnly: true,
        });
        if (redirectURL) {
            res.redirect(redirectURL);
        } else {
            res.json({ message: "액세스 토큰 발급 완료" });
        }
    },

    removeAccessToken: (req, res) => {
        console.log("removeAccessToken", req.cookies);
        if (req.cookies[COOKIE.KEY.ACCESS_TOKEN]) {
            res.clearCookie(COOKIE.KEY.ACCESS_TOKEN);
            res.status(StatusCodes.OK).json({
                message: "로그아웃 되었습니다.",
            });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "로그인해주세요.",
            });
        }
    },

    sendRefreshToken: (res, refreshToken) => {
        res.cookie(COOKIE.KEY.ACCESS_TOKEN, refreshToken, {
            httpOnly: true,
            // secure: true,
        }).json({ message: "리프레시 토큰 발급 완료" });
    },

    verifyToken: async (token) => {
        return jwt.verify(token, JWT.SECRET);
    },
};
