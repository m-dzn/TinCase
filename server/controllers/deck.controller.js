const { StatusCodes } = require("http-status-codes");
const { handleAsyncException } = require("../lib");
const { deckService } = require("../services");

module.exports = {
    list: handleAsyncException(async (req, res) => {
        const decks = await deckService.list();

        res.json(decks);
    }, "덱 목록 조회 중 오류가 발생했습니다."),

    create: handleAsyncException(async (req, res) => {
        await deckService.create(req.user.id, {
            ...req.body,
        });

        res.status(StatusCodes.CREATED).json("덱이 생성되었습니다.");
    }, "덱 생성 중 오류가 발생했습니다."),

    read: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const deck = await deckService.getDeck(id);

        res.json(deck);
    }),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await deckService.update(id, req.body);

        res.json({ message: "덱을 수정했습니다." });
    }),

    remove: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await deckService.delete(id);

        res.json({ message: "덱을 삭제했습니다." });
    }, "덱 삭제 중 오류가 발생했습니다."),

    addCard: handleAsyncException(async (req, res) => {
        const { deckId, cardId } = req.params;

        await deckService.addCardToDeck(deckId, cardId);

        res.json("덱에 카드를 추가했습니다.");
    }, "덱에 카드를 추가할 수 없습니다."),

    removeCard: handleAsyncException(async (req, res) => {
        const { deckId, cardId } = req.params;

        await deckService.removeCardInDeck(deckId, cardId);

        res.json("덱에서 카드를 제거했습니다.");
    }, "덱에서 카드를 제거할 수 없습니다."),
};
