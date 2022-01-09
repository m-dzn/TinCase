import React from "react";
import "./FoldableArrowButton.scss";
import cx from "classnames";

function FoldableArrowButton({ className, right, children, ...rest }) {
    const classnames = cx(
        className,
        "foldable-arrow-button",
        right ? "right" : "left"
    );

    return (
        <button className={classnames} {...rest}>
            <span>{children}</span>
        </button>
    );
}

export default FoldableArrowButton;
