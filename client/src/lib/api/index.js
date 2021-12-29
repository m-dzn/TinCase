import axios from "axios";

axios.defaults = {
    ...axios.defaults,
    baseURL: process.env.API_HOST,
    withCredentials: true,
};

export default axios;
