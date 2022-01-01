import axios from "./index";
import { PATH } from "constants";

const { API } = PATH;

export const me = async () => {
    try {
        const response = await axios.get(API.USERS.ME);
        return response.data;
    } catch (err) {
        return err.response.data;
    }
};
