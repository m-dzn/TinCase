import React from "react";
import "./AuthPageLink.scss";
import cx from "classnames";

function AuthPageLink({ className, href, label, children, ...rest }) {
    const classnames = cx(className, "auth-page-link");
    return (
        <div className={classnames} {...rest}>
            <span className="description">{label}</span>
            <a href={href}>{children}</a>
        </div>
    );
}

export default React.memo(AuthPageLink);
