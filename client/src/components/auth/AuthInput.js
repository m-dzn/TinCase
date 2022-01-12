import React from "react";
import "./AuthInput.scss";
import cx from "classnames";

function AuthInput({ className, input, ...rest }) {
    const classnames = cx("auth-input", className);

    const { name, type, value, label, maxLength, placeholder, message } = input;

    return (
        <div className={classnames}>
            <label>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                maxLength={maxLength + 1}
                placeholder={placeholder}
                {...rest}
            />
            <div className="validation-message">{message}</div>
        </div>
    );
}

export default React.memo(AuthInput);
