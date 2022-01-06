const { Deck, DeckCard } = require("../models");
const { handleAsyncException, CustomError } = require("../lib");
const { StatusCodes } = require("http-status-codes");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { name, isPublic } = req.body;
        const { id: userId } = req.user;

        await Deck.create({
            name,
            isPublic,
            userId,
        });

        res.status(StatusCodes.CREATED).json("덱이 생성되었습니다.");
    }, "덱 생성 중 오류가 발생했습니다."),

    addCard: handleAsyncException(async (req, res, next) => {
        const { deckId, cardId } = req.params;

        await DeckCard.create({ deckId, cardId }).catch((err) => {
            if (err.name === "SequelizeUniqueConstraintError") {
                next(
                    new CustomError(
                        "덱에 이미 존재하는 카드입니다.",
                        StatusCodes.BAD_REQUEST
                    )
                );
            }
        });

        res.json("덱에 카드를 추가했습니다.");
    }, "덱에 카드를 추가할 수 없습니다."),

    removeCard: handleAsyncException(async (req, res) => {
        const { deckId, cardId } = req.params;

        await DeckCard.destroy({ where: { deckId, cardId } });

        res.json("덱에서 카드를 제거했습니다.");
    }, "덱에서 카드를 제거할 수 없습니다."),
};
