import React from "react";
import "./YoutubeCard.scss";
import cx from "classnames";
import ReactPlayer from "react-player";
import { BasicCardTemplate } from "components";
import YoutubeInfoCard from "./YoutubeInfoCard";
import { useYoutubeInfo } from "lib";

function YoutubeCard({ className, card }) {
    const containerClass = cx("card", "youtube-card", className);

    const { videoInfo, channelInfo } = useYoutubeInfo(card.url);

    if (!card) return <BasicCardTemplate className={containerClass} />;

    return (
        <BasicCardTemplate className={containerClass}>
            <div
                style={{
                    width: "100%",
                    aspectRatio: "1.618",
                    background: "black",
                }}
            >
                <ReactPlayer
                    url={card.url}
                    width="100%"
                    height="100%"
                    controls
                    light
                    playing
                />
            </div>

            <section className="contents" style={{ color: "black" }}>
                <div>
                    <h5 className="youtube-card-title">{card.title} </h5>
                </div>
                <YoutubeInfoCard
                    videoInfo={videoInfo}
                    channelInfo={channelInfo}
                />
            </section>
        </BasicCardTemplate>
    );
}

export default YoutubeCard;
