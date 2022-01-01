import React from "react";
import "./YoutubeCardViewer.scss";
import cx from "classnames";
import YoutubeCard from "./YoutubeCard";

const testCard = [
    {
        title: "Zion.T - '선물을 고르며(A Gif...",
    },
];

function YoutubeCardViewer({ className }) {
    const classnames = cx("youtube-card-viewer", className);

    return (
        <div className={classnames}>
            <YoutubeCard card={testCard[0]} />
            <div></div>
        </div>
    );
}

export default YoutubeCardViewer;
