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
    const isMoreThanOne = cards.length > 1;

    return (
        <div className={classnames} {...rest}>
            <div className="card-pane">
                {isMoreThanOne && (
                    <SimpleArrowButton onClick={onClickPrevCard} size="md" />
                )}
                <CardContainer cardId={currentCardId} />
                {isMoreThanOne && (
                    <SimpleArrowButton
                        right
                        onClick={onClickNextCard}
                        size="md"
                    />
                )}
            </div>
            <div className="card-list-pane">
                <CardList cards={cards} onClickCardItem={onClickCardItem} />
            </div>
        </div>
    );
}

export default DeckViewer;
