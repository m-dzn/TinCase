import React from "react";
import "./YoutubeCard.scss";
import cx from "classnames";
import ReactPlayer from "react-player";
import { BasicCardTemplate } from "components";
import YoutubeInfoCard from "./YoutubeInfoCard";

function YoutubeCard({ className, video, youtubeInfo }) {
    const containerClass = cx("card", "youtube-card", className);

    if (!youtubeInfo) return <BasicCardTemplate className={containerClass} />;

    const { title: youtubeTitle, channelTitle, channelThumbnail } = youtubeInfo;

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
                <div>
                    <h5>{video?.title} </h5>
                </div>
                <YoutubeInfoCard youtubeInfo={youtubeInfo} />
            </section>
        </BasicCardTemplate>
    );
}

export default YoutubeCard;
