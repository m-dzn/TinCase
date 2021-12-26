import React from "react";
import RootRouter from "router";
import "styles/main.scss";

function App() {
    return (
        <div>
            <a href="/api/auth/kakao">카카오 로그인</a>
            <RootRouter />
        </div>
    );
}

export default App;
