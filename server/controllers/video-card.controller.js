const { handleAsyncException } = require("../lib");
const { VideoCard, Card } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { name, isPublic, url, provider } = req.body;

        await Card.create(
            {
                name,
                type: "video",
                isPublic,
                videoCard: {
                    url,
                    provider,
                },
            },
            { include: VideoCard }
        );

        res.json("비디오 카드가 생성됐습니다.");
    }, "비디오 카드 생성 중 오류가 발생했습니다."),
};
