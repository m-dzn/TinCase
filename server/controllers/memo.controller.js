const { StatusCodes } = require("http-status-codes");
const { CARD } = require("../config");
const { handleAsyncException, CustomError } = require("../lib");
const { Memo, Card } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { title, content, color } = req.body;

        await Memo.create(
            {
                card: {
                    title,
                    type: CARD.TYPE.MEMO,
                },
                content,
                color,
            },
            { include: Card }
        );

        res.json({
            message: "메모 카드를 생성했습니다.",
        });
    }, "메모 카드 생성 중 오류가 발생했습니다."),

    // 조회 로직
    readByCardId: handleAsyncException(async (req, res, next) => {
        const { cardId } = req.params;

        const card = await Card.findOne({
            where: { id: cardId },
            attributes: ["id", "title", "type", "isPublic", "userId"],
            include: { model: Memo },
        });

        if (!card) {
            next(
                new CustomError(
                    "메모 카드를 찾을 수 없습니다.",
                    StatusCodes.NOT_FOUND
                )
            );
        }

        res.json(card);
    }, "메모 카드 조회 중 오류가 발생했습니다."),

    updateByCardId: handleAsyncException(async (req, res, next) => {
        const { cardId } = req.params;
        const { title, content, color } = req.body;

        await Card.update(
            { title },
            {
                where: { id: cardId },
            }
        );

        await Memo.update({ content, color }, { where: { cardId } });

        res.json({ message: "메모 카드를 수정했습니다." });
    }, "메모 카드 수정 중 오류가 발생했습니다."),
};
