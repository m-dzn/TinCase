import React from "react";
import DeckList from "components/main/DeckList";

const decks = [
    {
        id: 1,
        title: "테스트 덱1",
    },
    {
        id: 2,
        title: "테스트 덱2",
    },
    {
        id: 3,
        title: "테스트 덱3",
    },
    {
        id: 4,
        title: "테스트 덱4",
    },
    {
        id: 5,
        title: "테스트 덱5",
    },
    {
        id: 6,
        title: "테스트 덱6",
    },
    {
        id: 7,
        title: "테스트 덱7",
    },
    {
        id: 8,
        title: "테스트 덱8",
    },
    {
        id: 9,
        title: "테스트 덱9",
    },
    {
        id: 10,
        title: "테스트 덱10",
    },
];

function DeckListContainer() {
    return <DeckList decks={decks} />;
}

export default DeckListContainer;
