import React from "react";
import "./AuthFormTemplate.scss";
import cx from "classnames";
import { Logo } from "components";

function AuthFormTemplate({ className, title, children, ...rest }) {
    const classnames = cx("auth-form-template", className);
    return (
        <div className={classnames} {...rest}>
            <Logo className="hover" />
            <h2 className="title">{title}</h2>
            {children}
        </div>
    );
}

export default AuthFormTemplate;
