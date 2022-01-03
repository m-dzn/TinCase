import { formatDate, formatUnitKor } from "lib";
import React from "react";
import "./YoutubeInfoCard.scss";
import cx from "classnames";

function YoutubeInfoCard({ className, youtubeInfo, ...rest }) {
    const classnames = cx("youtube-info-card", className);
    console.log("youtubeInfoCard", youtubeInfo);
    if (!youtubeInfo) return <div></div>;
    const {
        title: videoTitle,
        viewCount,
        publishedAt,
        channelTitle,
        channelThumbnail,
        subscriberCount,
    } = youtubeInfo;

    return (
        <div className={classnames} {...rest}>
            <div className="video-title">{videoTitle}</div>
            <div className="sub-info video-info">
                <div className="view-count">
                    조회수 {formatUnitKor(viewCount)}회
                </div>
                <div className="published-at">{formatDate(publishedAt)}</div>
            </div>

            <div className="channel-info">
                <img
                    className="channel-thumbnail"
                    src={channelThumbnail}
                    alt="channel-thumbnail"
                />
                <div className="channel-label">
                    <div className="channel-title">{channelTitle}</div>
                    <div className="subscriber sub-info">
                        구독자 {formatUnitKor(subscriberCount)} 명
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YoutubeInfoCard;
