const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authController.logout);

// OAuth2.0
router.get("/google", authController.google);
router.get("/google/callback", authController.googleCallback);
router.get("/kakao", authController.kakao);
router.get("/kakao/callback", authController.kakaoCallback);

module.exports = router;
