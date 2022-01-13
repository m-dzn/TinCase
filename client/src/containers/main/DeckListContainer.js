import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { deckPageState } from "lib";
import { BouncingArrow, DeckList } from "components";
import { useDeckList } from "lib";

function DeckListContainer() {
    const { deckList, totalPages, page, onFetchMoreDecks } = useDeckList();

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
