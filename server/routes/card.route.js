const express = require("express");
const router = express.Router();
const { cardController } = require("../controllers");

router.post("/", cardController.create);
router.get("/:id", cardController.read);
router.put("/:id", cardController.update);
router.delete("/:id", cardController.remove);

router.get("/", cardController.list);

module.exports = router;
