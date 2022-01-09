import React from "react";
import "./SimpleArrowButton.scss";
import cx from "classnames";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SimpleArrowButton({ className, right, size, ...rest }) {
    const classnames = cx(className, "button", "simple-arrow-button", size);
    return (
        <button className={classnames} {...rest}>
            {right ? <FaAngleRight /> : <FaAngleLeft />}
        </button>
    );
}

export default SimpleArrowButton;
