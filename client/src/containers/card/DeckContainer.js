import React from "react";
import { useDeck } from "lib";
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

    return (
        <DeckViewer
            currentCardId={currentCard?.id}
            deck={deck}
            cards={cards}
            onClickPrevCard={onClickPrevCard}
            onClickNextCard={onClickNextCard}
            onClickCardItem={onClickCardItem}
        />
    );
}

export default DeckContainer;
