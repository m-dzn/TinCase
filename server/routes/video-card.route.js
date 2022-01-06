const express = require("express");
const { videoCardController } = require("../controllers");
const router = express.Router();

router.post("/", videoCardController.create);

module.exports = router;
