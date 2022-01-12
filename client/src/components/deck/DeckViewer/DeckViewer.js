import React from "react";
import cx from "classnames";
import { SimpleArrowButton } from "components";
import { CardContainer } from "containers";
import CardList from "./CardList";
import "./DeckViewer.scss";

function DeckViewer({
    currentCardId,
    deck,
    cards,
    onClickPrevCard,
    onClickNextCard,
    onClickCardItem,
    onToggleLiked,
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
                <CardList
                    deck={deck}
                    cards={cards}
                    onClickCardItem={onClickCardItem}
                    onToggleLiked={onToggleLiked}
                />
            </div>
        </div>
    );
}

export default DeckViewer;
