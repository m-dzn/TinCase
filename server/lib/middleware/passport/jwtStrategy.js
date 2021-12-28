const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const { User } = require("../../../models");
const { JWT } = require("../../../config");

module.exports = new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: JWT.SECRET,
    },
    async (payload, done) => {
        const { id } = payload;

        try {
            const exUser = await User.findOne({ where: { id } });

            if (exUser) {
                return done(null, exUser);
            } else {
                return done(null, false, {
                    message: "올바르지 않은 인증 정보입니다.",
                });
            }
        } catch (err) {
            return done(err);
        }
    }
);
