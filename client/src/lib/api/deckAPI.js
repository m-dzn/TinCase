import axios from "./";
import { PATH } from "constants";

export const getDeck = async (deckId) => {
    const response = await axios.get(`${PATH.API.DECKS.CRUD}/${deckId}`);

    return response.data;
};
