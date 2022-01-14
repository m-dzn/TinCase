import axios from "./";
import { PATH } from "constants";

const { API } = PATH;

export const getDeckList = async (pageSize, page) => {
    const response = await axios.get(`${API.DECKS.CRUD}`, {
        params: {
            pageSize,
            page,
        },
    });
    return response.data;
};

export const getDeck = async (deckId) => {
    const response = await axios.get(`${API.DECKS.CRUD}/${deckId}`);

    return response.data;
};

export const deleteDeck = async (deckId) => {
    const response = await axios.delete(`${API.DECKS.CRUD}/${deckId}`);
    return response.data;
};

export const likeDeck = async (deckId) => {
    const url = API.DECKS.LIKE.replace(":deckId", deckId);
    const response = await axios.post(url);
    return response.data;
};

export const dislikeDeck = async (deckId) => {
    const url = API.DECKS.DISLIKE.replace(":deckId", deckId);
    const response = await axios.post(url);
    return response.data;
};

export const getFavoriteDeckList = async (pageSize, page) => {
    const response = await axios.get(API.DECKS.LIKE_LIST, {
        paramse: {
            pageSize,
            page,
        },
    });
    return response.data;
};
