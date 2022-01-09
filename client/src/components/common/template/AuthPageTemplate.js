import React from "react";
import "./AuthPageTemplate.scss";
import cx from "classnames";

function AuthPageTemplate({ className, title, children, ...rest }) {
    const classnames = cx("auth-page-template", className);
    return (
        <div className={classnames} {...rest}>
            {children}
        </div>
    );
}

export default AuthPageTemplate;
