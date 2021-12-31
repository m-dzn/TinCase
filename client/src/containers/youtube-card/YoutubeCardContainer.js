import React from "react";
import { FoldableArrowButton, YoutubeCard } from "components";

function YoutubeCardContainer() {
    return (
        <>
            <YoutubeCard />

            <FoldableArrowButton>PREV CARD</FoldableArrowButton>
            <FoldableArrowButton right>NEXT CARD</FoldableArrowButton>
        </>
    );
}

export default YoutubeCardContainer;
