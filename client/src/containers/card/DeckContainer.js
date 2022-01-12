import React, { useCallback } from "react";
import { deckAPI, useDeck } from "lib";
import { DeckViewer } from "components";

function DeckContainer({ deckId, cardId }) {
    const {
        deck,
        cards,
        currentCard,
        onClickPrevCard,
        onClickNextCard,
        onClickCardItem,
    } = useDeck(deckId, cardId);

    const handleClickLiked = useCallback(
        async (like) => {
            if (like) {
                await deckAPI.dislikeDeck(deckId);
            } else {
                await deckAPI.likeDeck(deckId);
            }
        },
        [deckId]
    );

    if (!deck) return <div>로딩 중</div>;

    return (
        <DeckViewer
            currentCardId={currentCard?.id}
            deck={deck}
            cards={cards}
            onClickPrevCard={onClickPrevCard}
            onClickNextCard={onClickNextCard}
            onClickCardItem={onClickCardItem}
            onToggleLiked={handleClickLiked}
        />
    );
}

export default DeckContainer;
