import React from "react";
import ReactDOM from "react-dom";
import "styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <React.Suspense fallback={<div>로딩 중</div>}>
        <RecoilRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </RecoilRoot>
    </React.Suspense>,
    document.getElementById("root")
);
