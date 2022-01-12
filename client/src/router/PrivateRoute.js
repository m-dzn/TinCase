import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserState } from "lib";
import { PATH } from "constants";

function PrivateRoute({ children }) {
    const me = useRecoilValue(currentUserState);

    if (!me) {
        alert("로그인이 필요한 서비스입니다.");
    }

    return me ? children : <Navigate to={PATH.CLIENT.LOGIN} />;
}

export default PrivateRoute;
