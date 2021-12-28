const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const { JWT, COOKIE, CLIENT } = require("../config");
const { getUrl } = require("../lib");

module.exports = {
    getAccessToken: (user) => {
        const { id } = user;

        try {
            return jwt.sign({ id }, JWT.SECRET, {
                expiresIn: JWT.ACCESS_TOKEN.EXPIRATION,
            });
        } catch (err) {
            console.error("JWT 액세스 토큰을 가져올 수 없습니다.");
        }
    },

    sendAccessToken: (res, accessToken) => {
        try {
            res.redirect(
                getUrl(CLIENT.OAUTH_REDIRECT_URL, {
                    [COOKIE.KEY.ACCESS_TOKEN]: accessToken,
                })
            );
        } catch (err) {
            res.json({ message: "액세스 토큰 발급 실패" });
        }
    },

    removeToken: (req, res) => {
        res.clearCookie(COOKIE.KEY.REFRESH_TOKEN);
        if (req.headers.authorization) {
            res.json({
                message: "로그아웃 되었습니다.",
            });
        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "로그인 해주세요.",
            });
        }
    },

    verifyToken: async (token) => {
        try {
            return jwt.verify(token, JWT.SECRET);
        } catch (err) {
            console.error(err);
            return null;
        }
    },
};
