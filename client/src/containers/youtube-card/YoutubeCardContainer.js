import React from "react";
import YoutubeCardViewerContainer from "./YoutubeCardViewerContainer";

const videos = [
    {
        id: 1,
        title: "2022 느낌있는 선곡 - 자이언티 노래 노래방 18번",
        url: "https://www.youtube.com/watch?v=ctAmUvoDkXE",
    },
    {
        id: 2,
        title: "Zion.T - '선물을 고르며(A Gif...",
        url: "https://www.youtube.com/watch?v=SWkONp1ktAY",
    },
    {
        id: 3,
        title: "Zion.T - '선물을 고르며(A Gif...",
        url: "https://www.youtube.com/watch?v=ctAmUvoDkXE",
    },
];

function YoutubeCardContainer() {
    const currentVideoId = new URL(videos[0].url).searchParams.get("v");

    return (
        <YoutubeCardViewerContainer
            currentVideoId={currentVideoId}
            videos={videos}
        />
    );
}

export default YoutubeCardContainer;
