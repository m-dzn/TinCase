const { StatusCodes } = require("http-status-codes");
const { Card } = require("../models");

module.exports = {
    createCard: async (cardDTO) => {
        const { title, type, isPublic } = cardDTO;

        await Card.create({
            title,
            type,
            isPublic,
        });
    },

    getCard: async (id) => {
        const card = await Card.findOne({ where: { id } });

        if (!card) {
            throw new CustomError(
                "카드를 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        return card.toJSON();
    },

    updateCard: async (id, cardDTO) => {
        const { title, isPublic } = cardDTO;

        await Card.update(
            {
                title,
                isPublic,
            },
            { where: { id } }
        );
    },

    deleteCard: async (id) => {
        await Card.destroy({ where: { id } });
    },
};
