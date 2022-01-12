const express = require("express");
const router = express.Router();
const { deckController } = require("../controllers");
const { isLoggedIn } = require("../lib");

router.get("/", deckController.list);
router.post("/", isLoggedIn, deckController.create);
router.get("/:id", deckController.read);
router.patch("/:id", isLoggedIn, deckController.update);
router.delete("/:id", isLoggedIn, deckController.remove);

router.post("/:deckId/cards/:cardId", isLoggedIn, deckController.addCard);
router.delete("/:deckId/cards/:cardId", isLoggedIn, deckController.removeCard);

router.post("/:deckId/like", isLoggedIn, deckController.like);
router.post("/:deckId/dislike", isLoggedIn, deckController.dislike);

module.exports = router;
