import { youtubeAPI } from "lib";
import { useEffect, useState } from "react";

export default function useYoutubeInfo(currentVideoId) {
    const [youtubeInfo, setYoutubeInfo] = useState();

    useEffect(() => {
        async function fetchVideoInfo() {
            const videoInfo = await youtubeAPI.getYoutubeVideoInfo(
                currentVideoId
            );
            const { title, channelId, publishedAt, channelTitle } =
                videoInfo.snippet;
            const { viewCount } = videoInfo.statistics;

            const channelInfo = await youtubeAPI.getYoutubeChannelInfo(
                channelId
            );
            const { subscriberCount } = channelInfo.statistics;

            console.log("videoInfo", videoInfo, "channelInfo", channelInfo);

            setYoutubeInfo({
                id: videoInfo.id,
                title,
                publishedAt,
                viewCount,
                channelTitle,
                channelThumbnail: channelInfo.snippet.thumbnails.default.url,
                subscriberCount,
            });
        }

        fetchVideoInfo();
    }, [currentVideoId]);

    return youtubeInfo;
}
