const { StatusCodes } = require("http-status-codes");
const { MemoCard, Card } = require("../models");
const { CARD } = require("../config");
const { CustomError } = require("../lib");
const { sequelize } = require("../models");

module.exports = {
    create: async (memoCardDTO) => {
        const { title, content, color } = memoCardDTO;

        await Card.create(
            {
                title,
                type: CARD.TYPE.MEMO,
                memoCard: {
                    content,
                    color,
                },
            },
            { include: MemoCard }
        );
    },

    getByCardId: async (cardId) => {
        const memoCard = await MemoCard.findOne({
            where: { cardId },
        });

        if (!memoCard) {
            throw new CustomError(
                "메모 카드를 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        return {
            memoId: memoCard.id,
            content: memoCard.content,
            color: memoCard.color,
            createdAt: memoCard.createdAt,
            updatedAt: memoCard.updatedAt,
        };
    },

    updateByCardId: async (cardId, memoCardDTO) => {
        const { title, content, color } = memoCardDTO;

        const transaction = await sequelize.transaction();

        try {
            await Card.update(
                { title },
                {
                    where: { id: cardId },
                    transaction,
                }
            );

            await MemoCard.update(
                { content, color },
                { where: { cardId }, transaction }
            );

            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
        }
    },
};
