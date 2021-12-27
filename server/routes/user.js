const express = require("express");
const passport = require("passport");
const router = express.Router();
const { userController } = require("../controllers");

router.get(
    "/me",
    passport.authenticate("jwt", { session: false }),
    userController.me
);
router.patch("/:id", userController.update);
router.delete("/:id", userController.delete);

module.exports = router;
