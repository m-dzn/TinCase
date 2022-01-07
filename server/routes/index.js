const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const deckRouter = require("./deck.route");
const cardRouter = require("./card.route");
const todoCardRouter = require("./todo.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/decks", deckRouter);
router.use("/cards", cardRouter);
router.use("/todos", todoCardRouter);

module.exports = router;
