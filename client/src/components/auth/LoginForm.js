import React from "react";
import "./LoginForm.scss";
import cx from "classnames";
import AuthInput from "./AuthInput";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthPageLink from "./AuthPageLink";
import { OAuthContainer } from "containers";
import { FlatButton } from "components";
import { PATH } from "constants";

function LoginForm({ className, form, isValid, onChange, onSubmit }) {
    const classnames = cx("login-form", className);

    const inputs = [];

    for (let name in form) {
        inputs.push(
            <AuthInput
                key={name}
                name={name}
                input={form[name]}
                onChange={onChange}
            />
        );
    }

    return (
        <AuthFormTemplate title="로그인">
            <form className={classnames} onSubmit={onSubmit}>
                <div className="form-group">{inputs}</div>
                <FlatButton onClick={onSubmit}>로그인</FlatButton>
            </form>
            <AuthPageLink href={PATH.CLIENT.JOIN} label="아이디가 없으신가요?">
                회원가입
            </AuthPageLink>
            <OAuthContainer />
        </AuthFormTemplate>
    );
}

export default LoginForm;
