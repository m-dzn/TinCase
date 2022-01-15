import React from "react";
import { currentUserState, useDeck } from "lib";
import { DeckViewer } from "components";
import { useRecoilValue } from "recoil";

function DeckContainer({ deckId, cardId }) {
    const {
        deck,
        cards,
        currentCard,
        onClickPrevCard,
        onClickNextCard,
        onClickCardItem,
    } = useDeck(deckId, cardId);
    const me = useRecoilValue(currentUserState);

    const isOwned = me && deck && me.id === deck.userId;

    if (!deck) return <div>로딩 중</div>;

    return (
        <DeckViewer
            currentCardId={currentCard?.id}
            deck={deck}
            cards={cards}
            currentUser={me}
            isOwned={isOwned}
            onClickPrevCard={onClickPrevCard}
            onClickNextCard={onClickNextCard}
            onClickCardItem={onClickCardItem}
        />
    );
}

export default DeckContainer;
