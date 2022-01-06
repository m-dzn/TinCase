const { StatusCodes } = require("http-status-codes");
const { handleAsyncException, CustomError } = require("../lib");
const { Todo, Card } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { text, done, color, cardId } = req.body;
        await Todo.create({
            text,
            done,
            color,
            cardId,
        }).catch((err) => {
            console.log("아이템 생성", err.message);
            throw new Error("Todo 아이템 생성 중 오류가 발생했습니다.");
        });

        res.status(StatusCodes.CREATED).json("Todo 아이템이 생성되었습니다.");
    }),

    read: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const todoItem = await Todo.findOne({ where: { id } });

        if (!todoItem) {
            throw new CustomError(
                "Todo Item을 찾을 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        res.json(todoItem);
    }),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const { text, done, color } = req.body;

        await Todo.update(
            {
                text,
                done,
                color,
            },
            {
                where: { id },
            }
        );

        res.json({ message: "Todo 아이템을 수정했습다." });
        // "Todo 카드 업데이트 중 오류가 발생했습니다."
    }),

    remove: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await Todo.destroy({ where: { id } });

        res.json({ message: "Todo 카드를 삭제했습니다." });
        // "Todo 아이템 업데이트 중 오류가 발생했습니다."
    }),

    readByCardId: handleAsyncException(async (req, res) => {
        const { cardId } = req.params;

        const card = await Card.findOne(
            { include: Todo },
            { where: { id: cardId } }
        );

        if (card !== 1) {
            throw new CustomError(
                "Todo 카드를 불러올 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        res.json(card);
    }),
};
