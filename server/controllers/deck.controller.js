const { StatusCodes } = require("http-status-codes");
const { handleAsyncException } = require("../lib");
const { deckService } = require("../services");

module.exports = {
    list: handleAsyncException(async (req, res) => {
        const { pageSize, page } = req.query;
        const decks = await deckService.list(
            parseInt(pageSize),
            parseInt(page)
        );

        console.log(decks);

        res.json(decks);
    }, "덱 목록 조회 중 오류가 발생했습니다."),

    create: handleAsyncException(async (req, res) => {
        await deckService.create(req.user.id, {
            ...req.body,
        });

        res.status(StatusCodes.CREATED).json({
            message: "덱이 생성되었습니다.",
        });
    }, "덱 생성 중 오류가 발생했습니다."),

    read: handleAsyncException(async (req, res) => {
        const { id } = req.params;
        const userId = req.user?.id;

        const deck = await deckService.getDeck(id, userId);

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

        res.json({ message: "덱에 카드를 추가했습니다." });
    }, "덱에 카드를 추가할 수 없습니다."),

    removeCard: handleAsyncException(async (req, res) => {
        const { deckId, cardId } = req.params;

        await deckService.removeCardInDeck(deckId, cardId);

        res.json({ message: "덱에서 카드를 제거했습니다." });
    }, "덱에서 카드를 제거할 수 없습니다."),

    like: handleAsyncException(async (req, res) => {
        const { deckId } = req.params;
        const { id: userId } = req.user;

        await deckService.like(deckId, userId);

        res.json({ message: "덱을 좋아요 목록에 추가했습니다." });
    }, "덱을 좋아요 목록에 추가할 수 없습니다."),

    dislike: handleAsyncException(async (req, res) => {
        const { deckId } = req.params;
        const { id: userId } = req.user;

        await deckService.dislike(deckId, userId);

        res.json({ message: "덱을 좋아요 목록에서 제거했습니다." });
    }, "덱을 좋아요 목록에서 제거할 수 없습니다."),

    favDeckList: handleAsyncException(async (req, res) => {
        const { id } = req.user;
        const { pageSize, page } = req.query;

        const decks = await deckService.favDeckList(id, pageSize, page);

        console.log(decks);

        res.json(decks);
    }, "좋아요 누른 덱 목록 조회 중 오류가 발생했습니다."),
};
