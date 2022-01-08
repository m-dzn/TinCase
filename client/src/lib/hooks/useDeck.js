import { deckAPI } from "lib";
import { useState, useEffect, useCallback } from "react";

function useDeck(deckId, cardId = 0) {
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const [cardIndex, setCardIndex] = useState(0);

    // 현재 카드 변경
    const onClickPrevCard = useCallback(() => {
        if (cardIndex > 0) {
            setCardIndex((index) => index - 1);
        } else {
            setCardIndex(cards.length - 1);
        }
    }, [cards, cardIndex]);

    const onClickNextCard = useCallback(() => {
        if (cardIndex < cards.length - 1) {
            setCardIndex((index) => index + 1);
        } else {
            setCardIndex(0);
        }
    }, [cards, cardIndex]);

    const onClickCardItem = useCallback(
        (index) => {
            if (0 <= index && index < cards.length) {
                setCardIndex(index);
            }
        },
        [cards]
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
    }, [deckId, cardId]);

    // 카드 목록 및 현재 카드 인덱스 변경 시 currentCard 갱신
    useEffect(() => {
        if (cards.length > 0) {
            setCurrentCard(cards[cardIndex]);
        }
    }, [cards, cardIndex]);

    return {
        cards,
        currentCard,
        onClickPrevCard,
        onClickNextCard,
        onClickCardItem,
    };
}

export default useDeck;
