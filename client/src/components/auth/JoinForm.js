import React from "react";
import "./JoinForm.scss";
import cx from "classnames";
import AuthInput from "./AuthInput";
import AuthFormTemplate from "./AuthFormTemplate";
import AuthPageLink from "./AuthPageLink";
import { OAuthContainer } from "containers";
import { FlatButton } from "components";
import { PATH } from "constants";

function JoinForm({ className, form, isValid, onChange, onSubmit }) {
    const classnames = cx("join-form", className);

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
        <AuthFormTemplate title="회원가입">
            <form className={classnames} onSubmit={onSubmit}>
                <div className="form-group">{inputs}</div>
                <FlatButton onClick={onSubmit}>회원가입</FlatButton>
            </form>
            <AuthPageLink
                href={PATH.CLIENT.LOGIN}
                label="이미 계정이 있으신가요?"
            >
                로그인
            </AuthPageLink>
            <OAuthContainer />
        </AuthFormTemplate>
    );
}

export default JoinForm;
