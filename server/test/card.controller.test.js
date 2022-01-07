jest.mock("../services/card.service");
jest.mock("../services/memoCard.service");
jest.mock("../services/todo.service");
jest.mock("../services/videoLinkCard.service");

jest.mock("../models/user.model");
jest.mock("../models/card.model");
jest.mock("../models/deck.model");
jest.mock("../models/memoCard.model");
jest.mock("../models/todo.model");
jest.mock("../models/videoLinkCard.model");

require("dotenv").config({ path: "../config/.env" });

console.log(process.env.HOST);

const { StatusCodes } = require("http-status-codes");
const { cardController } = require("../controllers");
const { Card, MemoCard } = require("../models");

describe("create", () => {
    const res = {
        status: jest.fn(() => res),
        json: jest.fn(),
    };
    const next = jest.fn();

    test("[메모 카드] 카드 생성 - 응답 성공", async () => {
        const req = {
            body: {
                title: "테스트 Memo 카드",
                type: "MEMO",
                isPublic: true,
                content: "테스트 Memo 내용",
                color: "#567ace",
            },
        };

        await cardController.create(req, res, next);

        expect(res.status).toBeCalledWith(StatusCodes.CREATED);
    });
});
