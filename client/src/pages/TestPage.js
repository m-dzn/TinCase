import React from "react";
import { MainPageTemplate } from "components";
import { DeckContainer } from "containers";
import { useParams } from "react-router-dom";

function TestPage() {
    const { deckId, cardId } = useParams();
    return (
        <MainPageTemplate>
            <DeckContainer deckId={deckId} cardId={cardId} />
        </MainPageTemplate>
    );
}

export default TestPage;
