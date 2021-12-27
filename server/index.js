// 환경 변수 불러오기
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const cors = require("cors");

// DB ORM : Sequelize
const { sequelize } = require("./models");
sequelize
    .sync({ force: false })
    .then(() => {
        console.log("DB 연결 성공");
    })
    .catch((err) => {
        console.error(err);
    });

const app = require("./app");
const { PORT, NODE_ENV, CLIENT } = require("./config");

// Basic Setting
app.set("port", PORT);

// Environment
if (NODE_ENV === "production") {
    app.use(express.static("client/build"));
} else {
    app.use(cors({ origin: CLIENT.BASE_URL, credentials: true }));
}

// Port Setting
app.listen(app.get("port"), () => {
    console.log(app.get("port"), "번 포트에서 대기 중");
});
