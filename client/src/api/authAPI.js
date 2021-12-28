import { axios } from "./index";
import PATH from "../consts/path";
import { COOKIE } from "consts";

const { API } = PATH;

export const login = async (loginForm) => {
    const response = await axios.post(API.AUTH.LOGIN, loginForm);
    return response.data;
};

export const logout = async () => {
    try {
        const response = await axios.post(API.AUTH.LOGOUT);
        localStorage.removeItem(COOKIE.ACCESS_TOKEN);
        axios.defaults.headers.common["Authorization"] = "";
        return response.data;
    } catch (err) {
        return err.response.data;
    }
};
