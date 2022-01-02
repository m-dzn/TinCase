import React from "react";
import "./YoutubeCardViewer.scss";
import cx from "classnames";
import YoutubeCard from "./YoutubeCard";
import YoutubeCardList from "./YoutubeCardList";

const videos = [
    {
        id: 1,
        title: "Zion.T - '선물을 고르며(A Gif...",
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

function YoutubeCardViewer({ className }) {
    const classnames = cx("youtube-card-viewer", className);

    return (
        <div className={classnames}>
            <YoutubeCard video={videos[0]} />
            <YoutubeCardList videos={videos} />
        </div>
    );
}

export default YoutubeCardViewer;
