const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../../models");
const bcrypt = require("bcryptjs");

module.exports = new LocalStrategy(
    {
        usernameField: "email",
        passwordField: "password",
    },
    async (email, password, done) => {
        console.log("[localStrategy]");
        try {
            const exUser = await User.findOne({
                where: { email },
            });

            if (!exUser) {
                done(null, false, {
                    message: "가입하지 않은 이메일입니다.",
                });
                return;
            }

            const result = await bcrypt.compare(password, exUser.password);

            if (result) {
                done(null, exUser);
            } else {
                done(null, false, {
                    message: "비밀번호가 일치하지 않습니다.",
                });
            }
        } catch (err) {
            console.error(err);
            done(err);
        }
    }
);
