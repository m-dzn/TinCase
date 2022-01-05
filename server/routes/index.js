const express = require("express");
const router = express.Router();

const authRouter = require("./auth.route");
const userRouter = require("./user.route");
const cardRouter = require("./card.route");
const todoItemRouter = require("./todo-item.route");

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/todo-cards", cardRouter);
router.use("/todo-items", todoItemRouter);

module.exports = router;
