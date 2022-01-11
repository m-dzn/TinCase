import React from "react";
import "./DeckCard.scss";
import cx from "classnames";

function DeckCard({ className, deck, ...rest }) {
    const classnames = cx(className, "deck-card");
    return (
        <div className={classnames} {...rest}>
            <div className="info-panel">
                <h6>{deck.title}</h6>
            </div>
        </div>
    );
}

export default DeckCard;
