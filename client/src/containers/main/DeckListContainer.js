import React from "react";
import { BouncingArrow, DeckList } from "components";
import { deckAPI, useDeckList } from "lib";

const getDeckListAPI = async ({ pageSize, page }) => {
    return deckAPI.getDeckList(pageSize, page);
};

function DeckListContainer() {
    const { deckList, onFetchMoreDecks } = useDeckList(getDeckListAPI);

    return (
        <>
            <DeckList deckList={deckList} onFetchMoreDecks={onFetchMoreDecks} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <BouncingArrow onClick={onFetchMoreDecks} />
            </div>
        </>
    );
}

export default DeckListContainer;
