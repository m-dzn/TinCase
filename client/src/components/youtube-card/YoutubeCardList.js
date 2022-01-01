import React from "react";
import "./YoutubeCardList.scss";
import cx from "classnames";
import YoutubeCard from "./YoutubeCard";

const testCard = [
    {
        title: "Zion.T - '선물을 고르며(A Gif...",
    },
];

function YoutubeCardList({ className }) {
    const classnames = cx("youtube-card-list", className);

    return (
        <div className={classnames}>
            <YoutubeCard card={testCard[0]} />
            <div></div>
        </div>
    );
}

export default YoutubeCardList;
