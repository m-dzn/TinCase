const getApi = (path) => {
    return (subPath) => {
        return `/v1${path}${subPath}`;
    };
};
const getAuthApi = (path) => getApi("/auth")(path);
const getUserApi = (path) => getApi("/users")(path);

const PATH = {
    CLIENT: {
        OAUTH_REDIRECT: "/oauth/redirect",
    },
    API: {
        AUTH: {
            REGISTER: getAuthApi("/register"),
            LOGIN: getAuthApi("/login"),
            LOGOUT: getAuthApi("/logout"),
            GOOGLE: getAuthApi("/google"),
            KAKAO: getAuthApi("/kakao"),
            NAVER: getAuthApi("/naver"),
        },
        USERS: {
            ME: getUserApi("/me"),
        },
    },
    YOUTUBE: {
        VIDEOS: "/videos",
        SEARCH: "/search",
        CHANNELS: "/channels",
    },
};

export default PATH;
