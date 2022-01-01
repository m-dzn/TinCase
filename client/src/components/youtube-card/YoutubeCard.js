import React from "react";
import "./YoutubeCard.scss";
import cx from "classnames";
import ReactPlayer from "react-player";
import { BasicCardTemplate } from "components";

function YoutubeCard({ className, card }) {
    const containerClass = cx("card", "youtube-card", className);
    const url = "https://www.youtube.com/watch?v=ctAmUvoDkXE";

    return (
        <BasicCardTemplate className={containerClass}>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1.618",
                    background: "black",
                }}
            >
                <ReactPlayer url={url} width="100%" height="100%" />
            </div>

            <section className="contents" style={{ color: "black" }}>
                <h5>{card?.title} </h5>
            </section>
        </BasicCardTemplate>
    );
}

export default YoutubeCard;
