import { deckAPI } from "lib";
import { atom, selector } from "recoil";

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

// 덱 목록
export const deckListState = selector({
    key: "deckListState",
    get: async ({ get }) => {
        const deckList = await deckAPI.getDeckList();
        return deckList;
    },
});
