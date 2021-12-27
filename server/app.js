const express = require("express");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const router = require("./routes");
const passportConfig = require("./middleware/passport");

const { COOKIE } = require("./config");
const { StatusCodes } = require("http-status-codes");

// Config
const app = express();
app.use(compression());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(COOKIE.SECRET));

// passport
passportConfig(app); // 설정 실행

// API Routing
app.use("/api", router);

app.use((req, res, next) => {
    res.status(StatusCodes.NOT_FOUND).json({
        message: "페이지를 찾을 수 없습니다.",
    });
});

module.exports = app;
