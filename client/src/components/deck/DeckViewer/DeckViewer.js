import React from "react";
import cx from "classnames";
import { SimpleArrowButton } from "components";
import { CardContainer, CardListContainer } from "containers";
import "./DeckViewer.scss";

function DeckViewer({
    currentCardId,
    deck,
    cards,
    isOwned,
    currentUser,
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
                <CardListContainer
                    deck={deck}
                    cards={cards}
                    isOwned={isOwned}
                    currentUser={currentUser}
                    onClickCardItem={onClickCardItem}
                />
            </div>
        </div>
    );
}

export default DeckViewer;
