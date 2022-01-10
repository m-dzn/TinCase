import React from "react";
import { BouncingArrow, MainPageTemplate } from "components";
import { DeckListContainer, ScrollToTop } from "containers";

function Main() {
    return (
        <MainPageTemplate>
            <DeckListContainer />

            <ScrollToTop />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <BouncingArrow />
            </div>
        </MainPageTemplate>
    );
}

export default Main;
