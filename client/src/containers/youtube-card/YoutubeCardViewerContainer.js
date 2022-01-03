import { YoutubeCardViewer } from "components";
import { useYoutubeInfo } from "lib";
import React from "react";

function YoutubeCardViewerContainer({ currentVideoId, videos }) {
    const youtubeInfo = useYoutubeInfo(currentVideoId);

    return <YoutubeCardViewer youtubeInfo={youtubeInfo} videos={videos} />;
}

export default YoutubeCardViewerContainer;
