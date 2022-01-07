const { StatusCodes } = require("http-status-codes");
const { Deck, CardInDeck, Card } = require("../models");
const { CustomError } = require("../lib");

module.exports = {
    create: async (userId, deckDTO) => {
        const { title, isPublic } = deckDTO;

        await Deck.create({
            title,
            isPublic,
            userId,
        });
    },

    getDeck: async (id) => {
        const deck = await Deck.findOne({ where: { id }, include: Card });

        if (!deck) {
            throw new CustomError(
                "덱을 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        return deck.toJSON();
    },

    update: async (id, deckDTO) => {
        const { title, isPublic } = deckDTO;

        await Deck.update(
            {
                title,
                isPublic,
            },
            { where: { id } }
        );
    },

    delete: async (id) => {
        await Deck.destroy({ where: { id } });
    },

    addCardToDeck: async (deckId, cardId) => {
        await CardInDeck.create({ deckId, cardId }).catch((err) => {
            if (err.name === "SequelizeUniqueConstraintError") {
                throw new CustomError(
                    "덱에 이미 존재하는 카드입니다.",
                    StatusCodes.BAD_REQUEST
                );
            }
        });
    },

    removeCardInDeck: async (deckId, cardId) => {
        await CardInDeck.destroy({ where: { deckId, cardId } });
    },
};
