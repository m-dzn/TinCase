// 환경 변수 불러오기
const dotenv = require("dotenv");
dotenv.config();

// 서버 앱 불러오기
const Server = require("./server");
const { PORT } = require("./config");

const server = new Server();
server.listen(PORT);
