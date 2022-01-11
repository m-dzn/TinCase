import axios from "./";
import { PATH } from "constants";

const { API } = PATH;

export const getCard = async (cardId) => {
    const response = await axios.get(`${API.CARDS.CRUD}/${cardId}`);
    return response.data;
};
