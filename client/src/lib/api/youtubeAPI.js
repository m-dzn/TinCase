import axios from "axios";
import { PATH, KEY } from "constants";

const youtubeClient = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: KEY.YOUTUBE.API_KEY },
});

export const getYoutubeVideoInfo = async (videoId) => {
    const response = await youtubeClient.get(PATH.YOUTUBE.VIDEOS, {
        params: {
            part: "id, snippet, statistics",
            id: videoId,
        },
    });

    return response.data.items[0];
};

export const getYoutubeChannelInfo = async (channelId) => {
    const response = await youtubeClient.get(PATH.YOUTUBE.CHANNELS, {
        params: {
            part: "id, snippet, statistics",
            id: channelId,
        },
    });

    console.log(response.data);

    return response.data.items[0];
};
