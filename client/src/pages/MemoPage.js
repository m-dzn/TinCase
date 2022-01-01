import React from "react";
import { CardDetailPageTemplate } from "components";
import { MemoCardContainer } from "containers";

function MemoPage() {
    return (
        <CardDetailPageTemplate>
            <MemoCardContainer />
        </CardDetailPageTemplate>
    );
}

export default MemoPage;
