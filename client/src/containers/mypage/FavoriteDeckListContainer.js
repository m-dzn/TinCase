import React from "react";
import { BouncingArrow, DeckList } from "components";
import { deckAPI, useDeckList } from "lib";

const getFavDeckListAPI = ({ pageSize, page }) => {
    return deckAPI.getFavoriteDeckList(pageSize, page);
};

function FavoriteDeckListContainer() {
    const { deckList, onFetchMoreDecks } = useDeckList(getFavDeckListAPI);

    return (
        <>
            <DeckList deckList={deckList} onFetchMoreDecks={onFetchMoreDecks} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <BouncingArrow onClick={onFetchMoreDecks} />
            </div>
        </>
    );
}

export default FavoriteDeckListContainer;
