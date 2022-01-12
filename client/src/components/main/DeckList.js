import React from "react";
import "./DeckList.scss";
import cx from "classnames";
import DeckCard from "./../deck/DeckCard/DeckCard";

function DeckList({ className, deckList, ...rest }) {
    const classnames = cx(className, "deck-list");
    return (
        <div className={classnames} {...rest}>
            {deckList &&
                deckList.map((deck) => (
                    <a key={deck.id} href={`/deck/${deck.id}`}>
                        <DeckCard deck={deck} />
                    </a>
                ))}
        </div>
    );
}

export default DeckList;
