import { useEffect } from "react";
import { cardAPI, currentCardState } from "lib";
import { useRecoilState } from "recoil";

function useCard(cardId) {
    const [card, setCard] = useRecoilState(currentCardState);

    useEffect(() => {
        async function fetchCardData(id) {
            // Card Viewer로 보여줄 카드 가져오기
            const cardData = await cardAPI.getCard(id);
            setCard(cardData);
        }

        if (cardId) {
            fetchCardData(cardId);
        }
    }, [cardId, setCard]);

    return {
        card,
    };
}

export default useCard;
