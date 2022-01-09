import React, { Suspense } from "react";
import { PATH } from "constants";
import { Routes, Route } from "react-router-dom";
import OAuthRedirect from "./OAuthRedirect";
import routes from "./routes";
import LoginFailureRedirect from "./LoginFailureRedirect";

function RootRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
                <Route
                    path={PATH.CLIENT.OAUTH_REDIRECT}
                    element={<OAuthRedirect />}
                />
                <Route
                    path={PATH.CLIENT.LOGIN_FAILURE_REDIRECT}
                    element={<LoginFailureRedirect />}
                />
            </Routes>
        </Suspense>
    );
}

export default RootRouter;

export { default as routes } from "./routes";
