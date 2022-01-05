const { StatusCodes } = require("http-status-codes");
const { handleAsyncException } = require("../lib");
const { TodoItem } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { text, done, color, cardId } = req.body;
        await TodoItem.create({
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

        const todoItem = await TodoItem.findOne({ where: { id } });

        if (!todoItem) {
            throw new Error("Todo Item을 찾을 수 없습니다.");
        }

        res.json(todoItem);
    }),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const { text, done, color } = req.body;

        await TodoItem.update(
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

    delete: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await TodoItem.destroy({ where: { id } });

        res.json({ message: "Todo 카드를 삭제했습니다." });
        // "Todo 아이템 업데이트 중 오류가 발생했습니다."
    }),
};
