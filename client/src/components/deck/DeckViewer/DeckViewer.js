import React from "react";
import cx from "classnames";
import { SimpleArrowButton } from "components";
import { CardContainer } from "containers";
import CardList from "./CardList";
import "./DeckViewer.scss";

function DeckViewer({
    currentCardId,
    cards,
    onClickPrevCard,
    onClickNextCard,
    onClickCardItem,
    className,
    ...rest
}) {
    const classnames = cx("deck-viewer", className);

    return (
        <div className={classnames} {...rest}>
            <div className="card-pane">
                <SimpleArrowButton onClick={onClickPrevCard} size="md" />
                <CardContainer cardId={currentCardId} />
                <SimpleArrowButton right onClick={onClickNextCard} size="md" />
            </div>
            <CardList cards={cards} onClickCardItem={onClickCardItem} />
        </div>
    );
}

export default DeckViewer;
