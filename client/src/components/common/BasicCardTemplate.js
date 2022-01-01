import React from "react";
import "./BasicCardTemplate.scss";
import cx from "classnames";

function BasicCardTemplate({ className, children, ...rest }) {
    const containerClass = cx("basic-card-template", className);

    return (
        <article className={containerClass} {...rest}>
            {children}
        </article>
    );
}

export default BasicCardTemplate;
