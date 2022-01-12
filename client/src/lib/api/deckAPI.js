import axios from "./";
import { PATH } from "constants";

const { API } = PATH;

export const getDeckList = async () => {
    const response = await axios.get(`${API.DECKS.CRUD}`);
    return response.data;
};

export const getDeck = async (deckId) => {
    const response = await axios.get(`${API.DECKS.CRUD}/${deckId}`);

    return response.data;
};
