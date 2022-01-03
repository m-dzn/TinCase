import React from "react";
import "./YoutubeCardList.scss";
import cx from "classnames";

function YoutubeCardList({ className, videos, ...rest }) {
    const classnames = cx("youtube-card-list", className);

    return (
        <article className={classnames} {...rest}>
            <h6>Video List</h6>
            <ul>
                {videos &&
                    videos.map((video) => (
                        <li key={video.id}>{video.title}</li>
                    ))}
            </ul>
        </article>
    );
}

export default YoutubeCardList;
