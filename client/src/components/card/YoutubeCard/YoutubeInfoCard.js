import { formatDate, formatUnitKor } from "lib";
import React from "react";
import "./YoutubeInfoCard.scss";
import cx from "classnames";

function YoutubeInfoCard({ className, videoInfo, channelInfo, ...rest }) {
    const classnames = cx("youtube-info-card", className);

    return (
        <div className={classnames} {...rest}>
            {videoInfo && (
                <div className="video-info">
                    <div className="video-title">{videoInfo.title}</div>
                    <div className="sub-info">
                        <div className="view-count">
                            조회수 {formatUnitKor(videoInfo.viewCount)}회
                        </div>
                        <div className="published-at">
                            {formatDate(videoInfo.publishedAt)}
                        </div>
                    </div>
                </div>
            )}

            {channelInfo && (
                <div className="channel-info">
                    <img
                        className="channel-thumbnail"
                        src={channelInfo.thumbnail}
                        alt="channel-thumbnail"
                    />
                    <div className="channel-label">
                        <div className="channel-title">{channelInfo.title}</div>
                        <div className="subscriber sub-info">
                            구독자 {formatUnitKor(channelInfo.subscriberCount)}{" "}
                            명
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default YoutubeInfoCard;
