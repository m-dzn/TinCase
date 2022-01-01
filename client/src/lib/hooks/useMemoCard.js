import { useState } from "react";

function useMemoCard(cards) {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [nextCardIndex, setNextCardIndex] = useState(1);
    const [outCardIndex, setOutCardIndex] = useState();
    const [isPrev, setIsPrev] = useState();

    const lastIndex = cards.length - 1;

    const setMemoCardIndexes = (outIndex, currentIndex, nextIndex) => {
        setOutCardIndex(outIndex);
        setCurrentCardIndex(currentIndex);
        setNextCardIndex(nextIndex);
    };

    const onClickPrev = () => {
        const newOutCardIndex = currentCardIndex;
        const newCurrentCardIndex =
            newOutCardIndex > 0 ? newOutCardIndex - 1 : lastIndex;
        const newNextCardIndex =
            newCurrentCardIndex > 0 ? newCurrentCardIndex - 1 : lastIndex;

        setIsPrev(true);
        setMemoCardIndexes(
            newOutCardIndex,
            newCurrentCardIndex,
            newNextCardIndex
        );
    };

    const onClickNext = () => {
        const newOutCardIndex = currentCardIndex;
        const newCurrentCardIndex =
            newOutCardIndex < lastIndex ? newOutCardIndex + 1 : 0;
        const newNextCardIndex =
            newCurrentCardIndex < lastIndex ? newCurrentCardIndex + 1 : 0;

        setIsPrev(false);
        setMemoCardIndexes(
            newOutCardIndex,
            newCurrentCardIndex,
            newNextCardIndex
        );
    };

    return {
        currentCardIndex,
        nextCardIndex,
        outCardIndex,
        isPrev,
        onClickPrev,
        onClickNext,
    };
}

export default useMemoCard;
