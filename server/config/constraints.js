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

    deck: {
        name: {
            max: 50,
        },
    },

    card: {
        name: {
            max: 50,
        },
        type: {
            max: 20,
        },
    },

    todo: {
        text: {
            max: 100,
        },
        color: {
            max: 10,
        },
    },

    videoCard: {
        url: {
            max: 2084,
        },
        provider: {
            max: 50,
        },
    },
};
