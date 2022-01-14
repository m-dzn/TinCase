const getAPI = (path) => {
    return (subPath) => {
        return `/v1${path || ""}${subPath || ""}`;
    };
};
const getAuthAPI = (path) => getAPI("/auth")(path);
const getUserAPI = (path) => getAPI("/users")(path);
const getCardAPI = (path) => getAPI("/cards")(path);
const getDeckAPI = (path) => getAPI("/decks")(path);
const getTodoAPI = (path) => getAPI("/todos")(path);

const PATH = {
    CLIENT: {
        OAUTH_REDIRECT: "/oauth/redirect",
        LOGIN_FAILURE_REDIRECT: "/login-failure",
        HOME: "/",
        LOGIN: "/login",
        JOIN: "/join",
        MY_PAGE: "/me",
        DECK: "/deck/:deckId",
        CARD_IN_DECK: "/deck/:deckId/card/:cardId",
    },
    API: {
        AUTH: {
            REGISTER: getAuthAPI("/register"),
            LOGIN: getAuthAPI("/login"),
            LOGOUT: getAuthAPI("/logout"),
            GOOGLE: getAuthAPI("/google"),
            KAKAO: getAuthAPI("/kakao"),
            NAVER: getAuthAPI("/naver"),
        },
        USERS: {
            ME: getUserAPI("/me"),
        },
        CARDS: {
            CRUD: getCardAPI(),
        },
        DECKS: {
            CRUD: getDeckAPI(),
            LIKE: getDeckAPI("/:deckId/like"),
            DISLIKE: getDeckAPI("/:deckId/dislike"),
            LIKE_LIST: getDeckAPI("/like"),
        },
        TODOS: {
            CRUD: getTodoAPI(),
        },
    },
    YOUTUBE: {
        VIDEOS: "/videos",
        SEARCH: "/search",
        CHANNELS: "/channels",
    },
};

export default PATH;
