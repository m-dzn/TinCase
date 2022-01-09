import { PATH } from "constants";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";

function LoginFailureRedirect() {
    const navigate = useNavigate();
    const location = useLocation();

    const { message } = qs.parse(location.search);

    useEffect(() => {
        alert(message);
        navigate(PATH.CLIENT.LOGIN);
    }, [navigate, message]);

    return <div></div>;
}

export default LoginFailureRedirect;
