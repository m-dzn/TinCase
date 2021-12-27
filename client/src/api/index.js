import axios from "axios";

export * as authAPI from "./authAPI";
export * as userAPI from "./userAPI";

axios.defaults = {
    ...axios.defaults,
    baseURL: process.env.API_HOST,
    withCredentials: true,
};

export { axios };
