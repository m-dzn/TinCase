import axios from "./";
import { PATH } from "constants";
import { apiUtils } from "lib";

const { API } = PATH;

export const register = (joinForm) => {
    return apiUtils.handleJsonError(async () => {
        const response = await axios.post(
            "http://localhost:5000/v1/auth/register",
            joinForm
        );
        return response.data;
    });
};

export const login = (loginForm) => {
    return apiUtils.handleJsonError(async () => {
        const response = await axios.post(API.AUTH.LOGIN, loginForm);
        return response.data;
    });
};

export const logout = () => {
    return apiUtils.handleJsonError(async () => {
        const response = await axios.post(API.AUTH.LOGOUT);
        return response.data;
    });
};
