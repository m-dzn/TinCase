const { User } = require("../models");
const { getAccessToken } = require("./jwtUtils");

module.exports = {
    checkProfileAvailability: (profile, done) => {
        if (!profile) {
            return done(null, {
                message: "SNS 회원 정보를 불러올 수 없습니다.",
            });
        }
    },

    verifySNS: async (newUserForm, done) => {
        if (!newUserForm?.email) {
            return done(null, { message: "이메일 정보를 불러올 수 없습니다." });
        }

        try {
            const exUser = await User.findOne({
                where: { email: newUserForm.email },
            });

            if (exUser) {
                done(null, exUser, { accessToken: getAccessToken(exUser) });
            } else {
                const newUser = await User.create(newUserForm);

                done(null, newUser, { accessToken: getAccessToken(newUser) });
            }
        } catch (err) {
            console.error(err);
            done(err, null, {
                message: "SNS 로그인에 실패했습니다.",
            });
        }
    },
};
