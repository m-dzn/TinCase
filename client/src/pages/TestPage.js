import React from "react";
import { CardDetailPageTemplate } from "components";
import { DeckContainer } from "containers";
import { useParams } from "react-router-dom";

function TestPage() {
    const { deckId, cardId } = useParams();
    return (
        <CardDetailPageTemplate>
            <DeckContainer deckId={deckId} cardId={cardId} />
        </CardDetailPageTemplate>
    );
}

export default TestPage;
