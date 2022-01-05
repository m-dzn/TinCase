const express = require("express");
const router = express.Router();
const { todoItemController } = require("../controllers");

router.post("/", todoItemController.create);
router.get("/:id", todoItemController.read);
router.put("/:id", todoItemController.update);
router.delete("/:id", todoItemController.delete);

module.exports = router;
