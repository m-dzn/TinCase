const express = require("express");
const router = express.Router();
const { todoController } = require("../controllers");
const { isLoggedIn } = require("../lib");

router.post("/", isLoggedIn, todoController.create);
router.get("/:id", todoController.read);
router.patch("/:id", isLoggedIn, todoController.update);
router.delete("/:id", isLoggedIn, todoController.remove);

router.get("/cards/:cardId", todoController.readByCardId);

module.exports = router;
