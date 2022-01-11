import { atom } from "recoil";

export const cardsState = atom({
    key: "cardsState",
    default: [],
});

export const cardIndexState = atom({
    key: "cardIndexState",
    default: 0,
});
