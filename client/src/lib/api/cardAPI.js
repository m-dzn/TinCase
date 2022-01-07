import axios from "./";
import { PATH } from "constants";

export const getCard = async (cardId) => {
    const response = await axios.get(`${PATH.CARDS.CRUD}/${cardId}`);
    console.log(response.data);
};
