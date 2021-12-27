import { authAPI, userAPI } from "api";
import React from "react";
import RootRouter from "router";
import "styles/main.scss";

function App() {
    const onLogin = () => {
        authAPI.login({
            email: "user@gmail.com",
            password: "12345",
        });
    };
    const onClick = async () => {
        const response = await authAPI.logout();
        console.log(response.message);
    };
    const fetchMe = async () => {
        const response = await userAPI.me();
        console.log(response);
    };

    return (
        <div>
            <button onClick={onLogin}>이메일 로그인</button>
            <a href="/api/auth/google">구글 로그인</a>
            <a href="/api/auth/kakao">카카오 로그인</a>
            <button onClick={onClick}>로그아웃</button>
            <button onClick={fetchMe}>내 정보</button>
            <RootRouter />
        </div>
    );
}

export default App;
