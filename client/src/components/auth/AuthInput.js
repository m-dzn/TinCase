import React from "react";
import "./AuthInput.scss";
import cx from "classnames";

function AuthInput({ className, input, ...rest }) {
    const classnames = cx("auth-input", className);

    const { name, type, value, label, placeholder, message } = input;

    return (
        <div className={classnames}>
            <label>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                {...rest}
            />
            <div className="validation-message"></div>
        </div>
    );
}

export default AuthInput;
