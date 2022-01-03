import axios from "axios";

axios.defaults = {
    ...axios.defaults,
    baseURL: process.env.REACT_APP_API_HOST,
    withCredentials: true,
};

export default axios;
