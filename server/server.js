const express = require("express");
const session = require("express-session");
const compression = require("compression");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const router = require("./routes");
const { passportConfig } = require("./lib");

const { COOKIE, CLIENT, API_VERSION } = require("./config");
const { StatusCodes } = require("http-status-codes");

// Config

module.exports = class Server {
    constructor() {
        this.app = express();
        this.db = require("./models");
        this.initializeDB();
        this.setMiddleware();
    }

    initializeDB() {
        // DB ORM : Sequelize
        const { db } = this;
        db.sequelize
            .sync({ alter: true })
            .then(() => {
                console.log("DB 연결 성공");
            })
            .catch((err) => {
                console.error(err);
            });
    }

    setMiddleware() {
        const { app } = this;
        app.use(compression());
        app.use(cors({ origin: CLIENT.BASE_URL, credentials: true }));
        app.use(
            session({
                resave: false,
                saveUninitialized: false,
                secret: COOKIE.SECRET,
                cookie: {
                    httpOnly: true,
                    secure: false,
                },
            })
        );

        // Parser
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser(COOKIE.SECRET));

        // passport
        passportConfig(app); // 설정 실행

        // API Routing
        app.use(API_VERSION, router);

        app.use((req, res, next) => {
            res.status(StatusCodes.NOT_FOUND).json({
                message: "페이지를 찾을 수 없습니다.",
            });
        });
    }

    listen(port) {
        const { app } = this;
        app.listen(port, () => {
            console.log(port, "번 포트에서 대기 중");
        });
    }
};
