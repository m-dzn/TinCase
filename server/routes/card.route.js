const express = require("express");
const router = express.Router();
const { cardController } = require("../controllers");
const { isLoggedIn } = require("../lib");

router.post("/", isLoggedIn, cardController.create);
router.get("/:id", cardController.read);
router.patch("/:id", isLoggedIn, cardController.update);
router.delete("/:id", isLoggedIn, cardController.remove);

module.exports = router;
