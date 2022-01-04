const { StatusCodes } = require("http-status-codes");
const { handleAsyncException: handleException } = require("../lib");
const { TodoItem } = require("../models");

module.exports = {
    create: (req, res) => {
        const { text, done, color } = req.body;

        handleException(
            res,
            async () => {
                await TodoItem.create({
                    text,
                    done,
                    color,
                });

                res.status(StatusCodes.CREATED).json(
                    "Todo 아이템이 생성되었습니다."
                );
            },
            "Todo 아이템 생성 중 오류가 발생했습니다."
        );
    },

    read: (req, res) => {
        const { id } = req.params;

        handleException(
            res,
            async () => {
                const todoItem = await TodoItem.findOne({ where: { id } });

                res.json(todoItem);
            },
            "Todo Item을 찾을 수 없습니다."
        );
    },

    update: (req, res) => {
        const { id } = req.params;

        const { text, done, color } = req.body;

        handleException(
            res,
            async () => {
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
            },
            "Todo 카드 업데이트 중 오류가 발생했습니다."
        );
    },

    delete: (req, res) => {
        const { id } = req.params;

        handleException(
            res,
            async () => {
                await TodoItem.destroy({ where: { id } });

                res.json({ message: "Todo 카드를 삭제했습니다." });
            },
            "Todo 아이템 업데이트 중 오류가 발생했습니다."
        );
    },
};
