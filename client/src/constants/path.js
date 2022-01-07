const getAPI = (path) => {
    return (subPath) => {
        return `/v1${path || ""}${subPath || ""}`;
    };
};
const getAuthAPI = (path) => getAPI("/auth")(path);
const getUserAPI = (path) => getAPI("/users")(path);
const getCardAPI = (path) => getAPI("/cards")(path);

const PATH = {
    CLIENT: {
        OAUTH_REDIRECT: "/oauth/redirect",
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
    },
    YOUTUBE: {
        VIDEOS: "/videos",
        SEARCH: "/search",
        CHANNELS: "/channels",
    },
};

export default PATH;
