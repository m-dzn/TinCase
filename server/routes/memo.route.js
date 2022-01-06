const express = require("express");
const { memoController } = require("../controllers");
const router = express.Router();

router.post("/", memoController.create);

router.get("/cards/:cardId", memoController.readByCardId);
router.put("/cards/:cardId", memoController.updateByCardId);

module.exports = router;
