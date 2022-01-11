import { PATH } from "constants";
import { cardIndexState, cardsState, deckAPI } from "lib";
import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";

function useDeck(deckId, cardId = 0) {
    const [cards, setCards] = useRecoilState(cardsState);
    const [cardIndex, setCardIndex] = useRecoilState(cardIndexState);

    // 현재 카드 변경
    const getDeckCardUrl = useCallback((deckId, cardId) => {
        return PATH.CLIENT.CARD_IN_DECK.replace(":deckId", deckId).replace(
            ":cardId",
            cardId
        );
    }, []);

    const navigateToDeckCard = useCallback(
        (index) => {
            const url = getDeckCardUrl(deckId, cards[index].id);
            window.history.replaceState("", "", url);
            setCardIndex(index);
        },
        [cards, deckId, setCardIndex, getDeckCardUrl]
    );

    const onClickPrevCard = useCallback(() => {
        const prevCardIndex = cardIndex > 0 ? cardIndex - 1 : cards.length - 1;
        navigateToDeckCard(prevCardIndex);
    }, [cards, cardIndex, navigateToDeckCard]);

    const onClickNextCard = useCallback(() => {
        const nextCardIndex = cardIndex < cards.length - 1 ? cardIndex + 1 : 0;
        navigateToDeckCard(nextCardIndex);
    }, [cards, cardIndex, navigateToDeckCard]);

    const onClickCardItem = useCallback(
        (index) => {
            navigateToDeckCard(index);
        },
        [navigateToDeckCard]
    );

    // deckId 변경 시 API로 덱 정보 가져오기
    useEffect(() => {
        async function fetchCards() {
            const deck = await deckAPI.getDeck(deckId);

            setCards(deck.cards);
            if (cardId) {
                const targetCardIndex = deck.cards.findIndex((card) => {
                    return card.id == cardId;
                });
                setCardIndex(Math.max(targetCardIndex, 0));
            } else {
                setCardIndex(0);
            }
        }

        if (deckId) {
            fetchCards();
        }

        return () => {
            setCards([]);
            setCardIndex(0);
        };
    }, [deckId, cardId, setCards, setCardIndex]);

    return {
        cards,
        currentCard: cards[cardIndex],
        onClickPrevCard,
        onClickNextCard,
        onClickCardItem,
    };
}

export default useDeck;
