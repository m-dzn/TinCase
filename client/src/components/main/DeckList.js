import React from "react";
import "./DeckList.scss";
import cx from "classnames";
import DeckCard from "./../deck/DeckCard/DeckCard";

function DeckList({ className, deckList, onFetchMoreDecks, ...rest }) {
    const classnames = cx(className, "deck-list");

    return (
        <div className={classnames} {...rest}>
            {deckList &&
                deckList.map((deck, idx) => (
                    <a key={deck.id} href={`/deck/${deck.id}`}>
                        <DeckCard
                            deck={deck}
                            isLastItem={deckList.length - 1 === idx}
                            onFetchMoreDecks={onFetchMoreDecks}
                        />
                    </a>
                ))}
        </div>
    );
}

export default React.memo(DeckList);
