import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string";
import { axios } from "api";
import { COOKIE } from "consts";

function OAuthRedirect() {
    const location = useLocation();
    const navigate = useNavigate();
    const { accessToken } = qs.parse(location.search);
    const redirectUrl = localStorage.getItem(COOKIE.REDIRECT_URL) || "/";

    console.log(accessToken);
    if (accessToken) {
        localStorage.setItem(COOKIE.ACCESS_TOKEN, accessToken);
        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${accessToken}`;
    }

    useEffect(() => {
        localStorage.removeItem(COOKIE.REDIRECT_URL);
        navigate(redirectUrl);
    }, [navigate, redirectUrl]);

    return <div></div>;
}

export default OAuthRedirect;
