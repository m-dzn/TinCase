import React, { useEffect, useRef } from "react";
import "./DeckCard.scss";
import cx from "classnames";
import { useScrollObserver } from "lib";

function DeckCard({ className, deck, isLastItem, onFetchMoreDecks, ...rest }) {
    const classnames = cx(className, "deck-card");
    const ref = useRef(null);
    const entry = useScrollObserver(ref, {
        rootMargin: "0px 0px -220px 0px",
        threshold: 1,
    });
    const isIntersecting = !!entry?.isIntersecting;

    useEffect(() => {
        if (isLastItem) {
            isIntersecting && onFetchMoreDecks();
        }
    }, [isLastItem, isIntersecting, onFetchMoreDecks]);

    return (
        <div className={classnames} ref={isLastItem ? ref : null} {...rest}>
            <div className="info-panel">
                <h6>{deck.title}</h6>
            </div>
        </div>
    );
}

export default React.memo(DeckCard);
