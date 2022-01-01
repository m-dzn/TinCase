import React from "react";
import "./FoldableArrowButton.scss";
import cx from "classnames";

function FoldableArrowButton({ right, children, ...rest }) {
    const classnames = cx("foldable-arrow-button", right ? "right" : "left");

    return (
        <button className={classnames} {...rest}>
            <span>{children}</span>
        </button>
    );
}

export default FoldableArrowButton;
