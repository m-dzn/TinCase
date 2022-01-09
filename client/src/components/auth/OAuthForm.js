import React from "react";
import "./OAuthForm.scss";
import cx from "classnames";
import kakaoLogo from "assets/images/kakao.png";
import naverLogo from "assets/images/naver.png";
import { PATH } from "constants";

function OAuthForm({ className, ...rest }) {
    const classnames = cx("social-login-form", className);
    return (
        <div className={classnames} {...rest}>
            <a href={PATH.API.AUTH.KAKAO} className="kakao-login">
                <img className="social-logo" src={kakaoLogo} alt="Kakao Logo" />
                <span className="text">카카오로 로그인</span>
            </a>
            <a href={PATH.API.AUTH.NAVER} className="naver-login">
                <img className="social-logo" src={naverLogo} alt="Naver Logo" />
                <span className="text">네이버로 로그인</span>
            </a>
        </div>
    );
}

export default OAuthForm;
