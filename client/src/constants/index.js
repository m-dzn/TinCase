export { default as COOKIE } from "./cookie";
export { default as PATH } from "./path";

export const KEY = {
    YOUTUBE: {
        API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
};

export const CARD = {
    TYPE: {
        MEMO: "MEMO",
        TODO: "TODO",
        VIDEO_LINK: "VIDEO_LINK",
    },
};

export const TODO = {
    FILTER: {
        ALL: "ALL",
        TODO: "TODO",
        DONE: "DONE",
    },
};

export const FORM = {
    JOIN: {
        EMAIL: "email",
        NICKNAME: "nickname",
        PASSWORD: "password",
        CONFIRM_PASSWORD: "confirmPassword",
    },
};
