import React from "react";
import "./YoutubeCard.scss";
import cx from "classnames";
import ReactPlayer from "react-player";
import { BasicCardTemplate } from "components";

function YoutubeCard() {
    const containerClass = cx("youtube-card");
    const url = "https://www.youtube.com/watch?v=ctAmUvoDkXE";

    return (
        <BasicCardTemplate className={containerClass}>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1.619",
                    background: "black",
                }}
            >
                <ReactPlayer url={url} width="100%" height="100%" />
            </div>

            <section className="contents" style={{ color: "black" }}>
                <h5>Zion.T - '선물을 고르며(A Gif... </h5>
            </section>
        </BasicCardTemplate>
    );
}

export default YoutubeCard;
