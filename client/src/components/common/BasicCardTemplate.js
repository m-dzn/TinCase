import React from "react";
import "./BasicCardTemplate.scss";
import cx from "classnames";

function BasicCardTemplate({ className, children }) {
    const containerClass = cx("basic-card-template", className);

    return <article className={containerClass}>{children}</article>;
}

export default BasicCardTemplate;
