import axios from "./";
import { PATH } from "constants";

export const getCard = async (cardId) => {
    const response = await axios.get(`${PATH.API.CARDS.CRUD}/${cardId}`);
    return response.data;
};
