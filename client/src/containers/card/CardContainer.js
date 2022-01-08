import React from "react";
import { CardViewer } from "components";
import { useCard } from "lib";

function CardContainer({ cardId }) {
    const { card } = useCard(cardId);

    return <CardViewer card={card} />;
}

export default CardContainer;
