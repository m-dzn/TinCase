import React from "react";
import "./YoutubeCard.scss";
import cx from "classnames";
import ReactPlayer from "react-player";
import { BasicCardTemplate } from "components";

function YoutubeCard({ className, video }) {
    const containerClass = cx("card", "youtube-card", className);

    return (
        <BasicCardTemplate className={containerClass}>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1.618",
                    background: "black",
                }}
            >
                <ReactPlayer url={video?.url} width="100%" height="100%" />
            </div>

            <section className="contents" style={{ color: "black" }}>
                <h5>{video?.title} </h5>
            </section>
        </BasicCardTemplate>
    );
}

export default YoutubeCard;
