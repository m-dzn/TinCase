import React, { Suspense } from "react";
import { PATH } from "consts";
import { Main, Test } from "pages";
import { Routes, Route } from "react-router-dom";
import OAuthRedirect from "./OAuthRedirect";

function RootRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/test" element={<Test />} />
                <Route
                    path={PATH.CLIENT.OAUTH_REDIRECT}
                    element={<OAuthRedirect />}
                />
            </Routes>
        </Suspense>
    );
}

export default RootRouter;
