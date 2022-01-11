const { StatusCodes } = require("http-status-codes");
const { handleAsyncException } = require("../lib");
const { todoService } = require("../services");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const todo = await todoService.create(req.body);

        res.status(StatusCodes.CREATED).json({
            todo,
            message: "Todo 아이템이 생성되었습니다.",
        });
    }, "Todo 아이템 생성 중 오류가 발생했습니다."),

    read: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const todoItem = await todoService.getTodoItem(id);
        res.json(todoItem);
    }, "Todo 아이템을 찾는 중 오류가 발생했습니다."),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await todoService.update(id, req.body);

        res.json({ message: "Todo 아이템이 수정되었습니다." });
        // "Todo 카드 업데이트 중 오류가 발생했습니다."
    }),

    remove: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await todoService.delete(id);

        res.json({ message: "Todo 아이템을 삭제했습니다." });
    }, "Todo 아이템 삭제 중 오류가 발생했습니다."),

    // 조회 로직
    readByCardId: handleAsyncException(async (req, res) => {
        const { cardId } = req.params;

        const card = await todoService.getByCardId(cardId);
        res.json(card);
    }, "Todo 카드 조회 중 오류가 발생했습니다."),
};
