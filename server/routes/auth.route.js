const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { isNotLoggedIn } = require("../lib");

router.post("/register", authController.register);
router.post("/login", isNotLoggedIn, authController.login);
router.post("/logout", authController.logout);

// OAuth2.0
router.get("/google", authController.google);
router.get("/google/callback", authController.googleCallback);
router.get("/kakao", authController.kakao);
router.get("/kakao/callback", authController.kakaoCallback);
router.get("/naver", authController.naver);
router.get("/naver/callback", authController.naverCallback);

module.exports = router;
