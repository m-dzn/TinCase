const EMAIL_MAX_LENGTH = 40;

module.exports = {
    user: {
        email: {
            max: EMAIL_MAX_LENGTH,
        },
        nickname: {
            max: 15,
        },
        password: {
            max: 255,
        },
        avatar: {
            max: 255,
        },
        provider: {
            max: 10,
        },
        snsId: {
            max: 30,
        },
    },
};
