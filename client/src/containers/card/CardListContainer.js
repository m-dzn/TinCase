import { CardList } from "components";
import { cardAPI, deckAPI, useLoginNavigate } from "lib";
import React, { useCallback } from "react";

function CardListContainer({
    deck,
    cards,
    isOwned,
    currentUser,
    onClickCardItem,
}) {
    const { checkLoggedIn } = useLoginNavigate();

    const handleClickLiked = useCallback(
        async (like) => {
            if (!checkLoggedIn(currentUser)) return;

            if (like) {
                await deckAPI.dislikeDeck(deck.id);
            } else {
                await deckAPI.likeDeck(deck.id);
            }
        },
        [deck, currentUser]
    );

    const handleClickDeleteDeck = useCallback(async () => {
        if (window.confirm("덱을 삭제하시겠습니까?")) {
            const response = await deckAPI.deleteDeck(deck.id);
            console.log(response);
        }
    }, [deck]);

    const handleClickDeleteCard = useCallback(async (cardId) => {
        if (window.confirm("카드를 삭제하시겠습니까?")) {
            const response = await cardAPI.deleteCard(cardId);
            console.log("cardId: ", cardId, response);
        }
    }, []);

    return (
        <CardList
            deck={deck}
            cards={cards}
            isOwned={isOwned}
            onToggleLiked={handleClickLiked}
            onClickCardItem={onClickCardItem}
            onClickDeleteDeck={handleClickDeleteDeck}
            onClickDeleteCard={handleClickDeleteCard}
        />
    );
}

export default CardListContainer;
