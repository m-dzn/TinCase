const express = require("express");
const router = express.Router();
const { todoController } = require("../controllers");

router.post("/", todoController.create);
router.get("/:id", todoController.read);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.remove);

// router.get("/", todoController.list);
router.get("/cards/:cardId", todoController.readByCardId);

module.exports = router;
