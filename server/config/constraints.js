module.exports = {
    user: {
        email: {
            max: 40,
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
        title: {
            max: 50,
        },
    },

    // 카드
    card: {
        title: {
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

    videoLinkCard: {
        url: {
            max: 2084,
        },
        provider: {
            max: 50,
        },
    },

    memoCard: {
        content: {
            max: 1000,
        },
        color: {
            max: 7,
        },
    },
};
