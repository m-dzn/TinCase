const passport = require("passport");
const { StatusCodes } = require("http-status-codes");

module.exports = {
    isLoggedIn: (req, res, next) => {
        passport.authenticate("jwt", { session: false }, (err, user) => {
            if (user) {
                req.user = user;
                next();
            } else {
                res.status(StatusCodes.UNAUTHORIZED).json({
                    message: "로그인이 필요합니다.",
                });
            }
        })(req, res, next);
    },
};
