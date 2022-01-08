const { StatusCodes } = require("http-status-codes");
const { CARD } = require("../config");
const { handleAsyncException, CustomError } = require("../lib");
const {
    cardService,
    memoCardService,
    videoLinkCardService,
} = require("../services");
const todoService = require("../services/todo.service");

module.exports = {
    create: handleAsyncException(async (req, res) => {
        const { type } = req.body;

        switch (type) {
            case CARD.TYPE.MEMO:
                await memoCardService.create(req.body);
                break;
            case CARD.TYPE.TODO:
                await todoService.createTodoCard(req.body);
                break;
            case CARD.TYPE.VIDEO_LINK:
                await videoLinkCardService.create(req.body);
                break;
            default:
                throw new CustomError(
                    "찾을 수 없는 유형의 카드입니다.",
                    StatusCodes.BAD_REQUEST
                );
        }

        res.status(StatusCodes.CREATED).json("카드가 생성되었습니다.");
    }, "카드 생성 중 오류가 발생했습니다."),

    read: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        const card = await cardService.getCard(id);

        let data;

        switch (card.type) {
            case CARD.TYPE.MEMO:
                data = await memoCardService.getByCardId(id);
                break;
            case CARD.TYPE.TODO:
                data = await todoService.getByCardId(id);
                break;
            case CARD.TYPE.VIDEO_LINK:
                data = await videoLinkCardService.getByCardId(id);
                break;
            default:
                throw new CustomError(
                    "찾을 수 없는 유형의 카드입니다.",
                    StatusCodes.BAD_REQUEST
                );
        }

        res.json({
            id: card.id,
            title: card.title,
            type: card.type,
            isPublic: card.isPublic,
            userId: card.userId,
            ...data,
        });
    }, "카드를 찾는 중 오류가 발생했습니다."),

    update: handleAsyncException(async (req, res) => {
        const { id } = req.params;
        const { type } = req.body;

        const card = await cardService.getCard(id);

        if (type !== card.type) {
            throw new CustomError(
                "카드 유형이 일치하지 않습니다.",
                StatusCodes.BAD_REQUEST
            );
        }

        switch (card.type) {
            case CARD.TYPE.MEMO:
                await memoCardService.updateByCardId(id, req.body);
                break;
            case CARD.TYPE.TODO:
                await cardService.updateCard(id, req.body);
                break;
            case CARD.TYPE.VIDEO_LINK:
                await videoLinkCardService.updateByCardId(id, req.body);
                break;
            default:
                throw new CustomError(
                    "찾을 수 없는 유형의 카드입니다.",
                    StatusCodes.BAD_REQUEST
                );
        }

        res.json({ message: "카드를 수정했습니다." });
    }, "카드 내용을 업데이트할 수 없습니다."),

    remove: handleAsyncException(async (req, res) => {
        const { id } = req.params;

        await cardService.deleteCard(id);

        res.json({ message: "카드를 삭제했습니다." });
    }, "카드를 삭제할 수 없습니다."),
};
