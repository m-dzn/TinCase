import { useEffect, useState } from "react";
import { cardAPI } from "lib";

function useCard(cardId) {
    const [card, setCard] = useState();

    useEffect(() => {
        async function fetchCardData(id) {
            // Card Viewer로 보여줄 카드 가져오기
            const cardData = await cardAPI.getCard(id);
            setCard(cardData);
        }

        if (cardId) {
            fetchCardData(cardId);
        }
    }, [cardId]);

    return {
        card,
    };
}

export default useCard;
