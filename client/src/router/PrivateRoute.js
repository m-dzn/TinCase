import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { currentUserState, useLoginNavigate, userAPI } from "lib";
import { PATH } from "constants";
import { LoadingComponent } from "components";

function PrivateRoute({ children }) {
    const [me, setMe] = useRecoilState(currentUserState);
    const [loading, setLoading] = useState(true);
    const { checkLoggedIn } = useLoginNavigate();

    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const data = await userAPI.me();
                setMe(data);
            } catch (err) {
                checkLoggedIn(false, {
                    replace: true,
                });
            } finally {
                setLoading(false);
            }
        })();
    }, [setMe]);

    if (loading) return <LoadingComponent />;

    return me ? children : <Navigate to={PATH.CLIENT.LOGIN} />;
}

export default PrivateRoute;
