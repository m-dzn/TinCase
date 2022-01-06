const { StatusCodes } = require("http-status-codes");
const { CARD } = require("../config");
const { handleAsyncException, CustomError } = require("../lib");
const { VideoLink, Card } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { title, isPublic, url, provider } = req.body;

        await Card.create(
            {
                title,
                type: CARD.TYPE.VIDEO_LINK,
                isPublic,
                videoLink: {
                    url,
                    provider,
                },
            },
            { include: VideoLink }
        );

        res.json("비디오 카드가 생성되었습니다.");
    }, "비디오 카드 생성 중 오류가 발생했습니다."),

    // Card
    readByCardId: handleAsyncException(async (req, res, next) => {
        const { cardId } = req.params;

        const card = await Card.findOne({
            where: { id: cardId },
            include: VideoLink,
        });

        if (!card || !card.videoLink) {
            console.log(card);
            return next(
                new CustomError(
                    "비디오 카드를 찾을 수 없습니다.",
                    StatusCodes.NOT_FOUND
                )
            );
        }

        res.json(card);
    }, "비디오 카드 조회 중 오류가 발생했습니다."),

    updateByCardId: handleAsyncException(async (req, res) => {
        const { cardId } = req.params;
        const { title, isPublic, url, provider } = req.body;

        await Card.update(
            {
                title,
                isPublic,
            },
            {
                where: { id: cardId },
            }
        );

        await VideoLink.update(
            {
                url,
                provider,
            },
            {
                where: { cardId },
            }
        );

        res.json({ message: "비디오 카드가 수정되었습니다." });
    }, "비디오 카드 수정 중 오류가 발생했습니다."),
};
