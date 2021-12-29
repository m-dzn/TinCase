import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COOKIE } from "consts";

function OAuthRedirect() {
    const location = useLocation();
    const navigate = useNavigate();
    const redirectUrl = localStorage.getItem(COOKIE.REDIRECT_URL) || "/";

    useEffect(() => {
        localStorage.removeItem(COOKIE.REDIRECT_URL);
        navigate(redirectUrl);
    }, [navigate, redirectUrl]);

    return <div></div>;
}

export default OAuthRedirect;
