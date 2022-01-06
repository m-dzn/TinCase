const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { isLoggedIn } = require("../lib");

router.get("/me", isLoggedIn, userController.me);
router.patch("/:id", userController.update);
router.delete("/:id", userController.unregister);

module.exports = router;
