const express = require("express");
const router = express.Router();
const { deckController } = require("../controllers");

router.post("/", deckController.create);

router.post("/:deckId/cards/:cardId", deckController.addCard);
router.delete("/:deckId/cards/:cardId", deckController.removeCard);

module.exports = router;
