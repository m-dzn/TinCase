import React from "react";
import { BasicCardTemplate, MemoCard, YoutubeCard } from "components";
import { CARD } from "constants";
import { TodoCardContainer } from "containers";

function CardViewer({ card }) {
    if (!card) return <BasicCardTemplate />;

    const { type } = card;

    let CardComponent;

    switch (type) {
        case CARD.TYPE.MEMO:
            CardComponent = MemoCard;
            break;
        case CARD.TYPE.TODO:
            CardComponent = TodoCardContainer;
            break;
        case CARD.TYPE.VIDEO_LINK:
            CardComponent = YoutubeCard;
            break;
        default:
            CardComponent = BasicCardTemplate;
    }

    return <CardComponent card={card} />;
}

export default CardViewer;
