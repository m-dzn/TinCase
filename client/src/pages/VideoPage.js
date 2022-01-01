import React from "react";
import { CardDetailPageTemplate } from "components";
import { YoutubeCardContainer } from "containers";

function VideoPage() {
    return (
        <CardDetailPageTemplate>
            <YoutubeCardContainer />
        </CardDetailPageTemplate>
    );
}

export default VideoPage;
