const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { isNotLoggedIn } = require("../lib");

router.post("/register", authController.register);
router.post("/login", isNotLoggedIn, authController.login);
router.post("/logout", authController.logout);

// OAuth2.0
router.get("/google", isNotLoggedIn, authController.google);
router.get("/google/callback", authController.googleCallback);
router.get("/kakao", isNotLoggedIn, authController.kakao);
router.get("/kakao/callback", isNotLoggedIn, authController.kakaoCallback);
router.get("/naver", isNotLoggedIn, authController.naver);
router.get("/naver/callback", authController.naverCallback);

module.exports = router;
