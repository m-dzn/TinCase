import { youtubeAPI } from "lib";
import { useEffect, useState } from "react";

export default function useYoutubeInfo(url) {
    const [videoInfo, setVideoInfo] = useState();
    const [channelInfo, setChannelInfo] = useState();

    const urlObj = new URL(url);

    const youtubeVideoId =
        urlObj.searchParams.get("v") || urlObj.pathname.substring(1);

    useEffect(() => {
        async function fetchVideoInfo() {
            const vInfo = await youtubeAPI.getYoutubeVideoInfo(youtubeVideoId);
            const { title, channelId, publishedAt } = vInfo.snippet;
            const { viewCount } = vInfo.statistics;
            setVideoInfo({
                id: vInfo.id,
                title,
                publishedAt,
                viewCount,
            });

            const cInfo = await youtubeAPI.getYoutubeChannelInfo(channelId);
            const { subscriberCount } = cInfo.statistics;

            setChannelInfo({
                title: cInfo.snippet.localized.title,
                thumbnail: cInfo.snippet.thumbnails.default.url,
                subscriberCount,
            });
        }

        fetchVideoInfo();
    }, [youtubeVideoId]);

    return {
        videoInfo,
        channelInfo,
    };
}
