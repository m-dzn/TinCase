import { deckAPI } from "lib";
import { atom, selector } from "recoil";

// 페이징
export const deckMapState = atom({
    key: "deckMapState",
    default: new Map(),
});

export const deckPageSizeState = atom({
    key: "deckPageSizeState",
    default: 4,
});

export const deckPageState = atom({
    key: "deckPageState",
    default: 1,
});

export const asyncDeckListSelector = selector({
    key: "asyncDeckListSelector",
    get: async ({ get }) => {
        const deckMap = get(deckMapState);
        const pageSize = get(deckPageSizeState);
        const page = get(deckPageState);
        const response = await deckAPI.getDeckList(pageSize, page);

        response.data.forEach((deck) => deckMap.set(deck.id, deck));

        return {
            deckList: Array.from(deckMap.values()),
            totalPages: response.totalPages,
        };
    },
});

// 덱 뷰어
export const deckState = atom({
    key: "deckState",
    default: null,
});

export const cardsState = atom({
    key: "cardsState",
    default: [],
});

export const cardIndexState = atom({
    key: "cardIndexState",
    default: 0,
});
