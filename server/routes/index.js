const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const deckRouter = require("./deck.route");
const cardRouter = require("./card.route");
const todoRouter = require("./todo.route");
const videoLinkRouter = require("./video-link.route");
const memoRouter = require("./memo.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/decks", deckRouter);
router.use("/cards", cardRouter);
router.use("/todos", todoRouter);
router.use("/video-links", videoLinkRouter);
router.use("/memos", memoRouter);

module.exports = router;
