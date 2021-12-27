import { axios } from "./index";
import PATH from "../consts/path";

const { API } = PATH;

export const login = async (loginForm) => {
    const response = await axios.post(API.AUTH.LOGOUT, loginForm);
    return response.data;
};

export const logout = async () => {
    try {
        const response = await axios.post(API.AUTH.LOGOUT, null, {
            responseType: "json",
        });
        console.log("logout", response);
        return response.data;
    } catch (err) {
        console.log("logout", err);
    }
};
