// 환경 변수 불러오기
require("dotenv").config({ path: "./config/.env" });
const Server = require("./server");
const { PORT } = require("./config");

const server = new Server();
server.listen(PORT);
