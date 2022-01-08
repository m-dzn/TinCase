const { StatusCodes } = require("http-status-codes");
const { Todo, Card } = require("../models");
const { CARD } = require("../config");

module.exports = {
    create: async (todoDTO) => {
        const { text, done, color, cardId } = todoDTO;

        await Todo.create({
            text,
            done,
            color,
            cardId,
        });
    },

    createTodoCard: async (todoCardDTO) => {
        const { title, isPublic, todos } = todoCardDTO;

        await Card.create(
            {
                title,
                type: CARD.TYPE.TODO,
                isPublic,
                todos,
            },
            { include: Todo }
        );
    },

    getTodoItem: async (id) => {
        const todoItem = await Todo.findOne({ where: { id } });

        if (!todoItem) {
            return next(
                new CustomError(
                    "Todo 아이템을 찾을 수 없습니다.",
                    StatusCodes.NOT_FOUND
                )
            );
        }

        return todoItem.toJSON();
    },

    update: async (id, todoDTO) => {
        const { text, done, color } = todoDTO;

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
    },

    delete: async (id) => {
        await Todo.destroy({ where: { id } });
    },

    getByCardId: async (cardId) => {
        const todos = await Todo.findAll({ where: { cardId } });

        if (!todos) {
            throw new CustomError(
                "Todo 카드를 불러올 수 없습니다.",
                StatusCodes.NOT_FOUND
            );
        }

        return {
            todos,
        };
    },
};
