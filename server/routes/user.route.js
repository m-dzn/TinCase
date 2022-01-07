const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { isLoggedIn } = require("../lib");

router.get("/me", isLoggedIn, userController.me);
router.patch("/:id", isLoggedIn, userController.update);
router.delete("/:id", isLoggedIn, userController.unregister);

module.exports = router;
