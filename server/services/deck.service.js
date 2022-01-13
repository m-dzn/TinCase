const { StatusCodes } = require("http-status-codes");
const { Deck, CardInDeck, Card, User, FavoriteDeck } = require("../models");
const { CustomError, getPagingData } = require("../lib");

module.exports = {
    list: async (pageSize = 10, page = 1) => {
        const deckList = await Deck.findAndCountAll({
            where: { isPublic: true },
            include: [
                { model: User, attributes: ["id", "nickname", "avatar"] },
            ],
            order: [
                ["createdAt", "DESC"],
                ["id", "DESC"],
            ],
            limit: pageSize,
            offset: (page - 1) * pageSize,
        });

        return getPagingData(deckList, pageSize, page);
    },

    create: async (userId, deckDTO) => {
        const { title, isPublic } = deckDTO;

        await Deck.create({
            title,
            isPublic,
            userId,
        });
    },

    getDeck: async (id, userId) => {
        const deck = await Deck.findOne({
            where: { id },
            include: [{ model: Card, where: { isPublic: true } }],
        });

        if (!deck) {
            throw new CustomError(
                "덱을 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        const response = deck.toJSON();

        if (userId) {
            const liked = await FavoriteDeck.findOne({
                where: {
                    deckId: id,
                    userId,
                },
            });

            response.liked = !!liked;
        }

        return response;
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
        const result = await CardInDeck.create({ deckId, cardId }).catch(
            (err) => {
                if (err.name === "SequelizeUniqueConstraintError") {
                    throw new CustomError(
                        "덱에 이미 존재하는 카드입니다.",
                        StatusCodes.BAD_REQUEST
                    );
                }
            }
        );

        if (!result) {
            throw new CustomError(
                "덱에 카드를 추가할 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        console.log(result);
    },

    removeCardInDeck: async (deckId, cardId) => {
        const result = await CardInDeck.destroy({ where: { deckId, cardId } });

        if (!result) {
            throw new CustomError(
                "덱에서 카드를 제거하는 데 실패했습니다.",
                StatusCodes.NOT_FOUND
            );
        }
    },

    like: async (deckId, userId) => {
        await FavoriteDeck.create({ deckId, userId });
    },

    dislike: async (deckId, userId) => {
        await FavoriteDeck.destroy({ where: { deckId, userId } });
    },
};
