const express = require("express");
const { videoLinkController } = require("../controllers");
const router = express.Router();

router.post("/", videoLinkController.create);

router.get("/cards/:cardId", videoLinkController.readByCardId);
router.put("/cards/:cardId", videoLinkController.updateByCardId);

module.exports = router;
