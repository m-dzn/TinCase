const { StatusCodes } = require("http-status-codes");
const { Card, VideoLinkCard, sequelize } = require("../models");
const { CARD } = require("../config");
const { CustomError } = require("../lib");

module.exports = {
    create: async (videoLinkCardDTO) => {
        const { title, isPublic, url, provider } = videoLinkCardDTO;

        await Card.create(
            {
                title,
                type: CARD.TYPE.VIDEO_LINK,
                isPublic,
                videoLinkCard: {
                    url,
                    provider,
                },
            },
            { include: VideoLinkCard }
        );
    },

    getByCardId: async (cardId) => {
        const videoLinkCard = await VideoLinkCard.findOne({
            where: { cardId },
        });

        if (!videoLinkCard) {
            throw new CustomError(
                "비디오 카드를 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        return {
            videoLinkId: videoLinkCard.id,
            url: videoLinkCard.url,
            provider: videoLinkCard.provider,
            createdAt: videoLinkCard.createdAt,
            updatedAt: videoLinkCard.updatedAt,
        };
    },

    updateByCardId: async (cardId, videoLinkCardDTO) => {
        const { title, isPublic, url, provider } = videoLinkCardDTO;

        const transaction = await sequelize.transaction();

        try {
            await Card.update(
                {
                    title,
                    isPublic,
                },
                { where: { id: cardId }, transaction }
            );

            await VideoLinkCard.update(
                { url, provider },
                { where: { cardId }, transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
        }
    },
};
