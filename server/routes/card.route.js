const express = require("express");
const { cardController } = require("../controllers");
const router = express.Router();

router.post("/", cardController.create);
router.get("/:id", cardController.read);
router.put("/:id", cardController.update);
router.delete("/:id", cardController.delete);

module.exports = router;
