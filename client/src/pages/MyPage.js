import React from "react";
import { MainPageTemplate } from "components";
import { FavoriteDeckListContainer } from "containers";

function MyPage() {
    return (
        <MainPageTemplate>
            <FavoriteDeckListContainer />
        </MainPageTemplate>
    );
}

export default MyPage;
