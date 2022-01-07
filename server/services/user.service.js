const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { CustomError } = require("../lib");

module.exports = {
    register: async (registerForm) => {
        const { email, nickname, password } = registerForm;

        const exUser = await User.findOne({ where: { email } });
        if (exUser) {
            throw new CustomError(
                "이미 가입된 이메일입니다.",
                StatusCodes.CONFLICT
            );
        }

        const hash = await bcrypt.hash(password, 12);

        await User.create({
            email,
            nickname,
            password: hash,
        });
    },

    unregister: async (id) => {
        const user = await User.destroy({ where: { id } });

        if (!user) {
            throw new CustomError(
                "회원 정보를 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }
    },
};
