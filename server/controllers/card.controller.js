const { StatusCodes } = require("http-status-codes");
const { handleAsyncException, CustomError } = require("../lib");
const { Card, TodoItem } = require("../models");

module.exports = {
    create: handleAsyncException(async (req, res, next) => {
        const { title, type, isPublic } = req.body;

        await Card.create({
            title,
            type,
            isPublic,
        });

        res.status(StatusCodes.CREATED).json("카드가 생성되었습니다.");
    }, "카드 생성 중 오류가 발생했습니다."),

    read: handleAsyncException(async (req, res, next) => {
        const { id } = req.params;
        const card = await Card.findOne({ where: { id } });

        if (!card) {
            const error = new Error("카드를 찾을 수 없습니다.");
            error.status = StatusCodes.NOT_FOUND;
            next(error);
        }

        const response = {
            ...card.dataValues,
        };

        if (card.type === "todo") {
            response.todos = await TodoItem.findAll({
                where: { cardId: card.id },
            });
        }

        res.json(response);
    }, "카드를 찾는 중 오류가 발생했습니다."),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const { title, isPublic } = req.body;

        await Card.update(
            {
                title,
                isPublic,
            },
            { where: { id } }
        );

        res.json({ message: "카드를 수정했습니다." });
    }, "카드 내용을 업데이트할 수 없습니다."),

    delete: handleAsyncException(async (req, res) => {
        const { id } = req.params;
        await Card.destroy({ where: { id } });

        res.json({ message: "카드를 삭제했습니다." });
    }, "카드를 삭제할 수 없습니다."),
};
