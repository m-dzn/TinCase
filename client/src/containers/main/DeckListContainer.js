import React from "react";
import { useRecoilValue } from "recoil";
import { deckListState } from "lib";
import { DeckList } from "components";

function DeckListContainer() {
    const deckList = useRecoilValue(deckListState);
    console.log(deckList);

    return <DeckList deckList={deckList} />;
}

export default DeckListContainer;
