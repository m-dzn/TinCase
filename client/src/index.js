import React from "react";
import ReactDOM from "react-dom";
import "styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import { LoadingComponent } from "components";

ReactDOM.render(
    <RecoilRoot>
        <BrowserRouter>
            <React.Suspense fallback={<LoadingComponent />}>
                <App />
            </React.Suspense>
        </BrowserRouter>
    </RecoilRoot>,
    document.getElementById("root")
);
