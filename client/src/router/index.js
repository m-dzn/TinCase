import React, { Suspense } from "react";
import { PATH } from "constants";
import { Routes, Route } from "react-router-dom";
import OAuthRedirect from "./OAuthRedirect";
import navMenuRoutes from "./navMenuRoutes";

function RootRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {navMenuRoutes.map((route) => (
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
            </Routes>
        </Suspense>
    );
}

export default RootRouter;
