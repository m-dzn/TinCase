import React from "react";
import "./FoldableArrowButton.scss";
import cx from "classnames";

function FoldableArrowButton({ right, children }) {
    const classnames = cx("foldable-arrow-button", { right });

    return (
        <button className={classnames}>
            <span>{children}</span>
        </button>
    );
}

export default FoldableArrowButton;
