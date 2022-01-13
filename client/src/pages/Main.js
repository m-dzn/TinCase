import React from "react";
import { MainPageTemplate } from "components";
import { DeckListContainer, ScrollToTop } from "containers";

function Main() {
    return (
        <MainPageTemplate>
            <DeckListContainer />

            <ScrollToTop />
        </MainPageTemplate>
    );
}

export default Main;
