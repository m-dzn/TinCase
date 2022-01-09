import React from "react";
import "./BouncingArrow.scss";
import cx from "classnames";
import { FaChevronDown } from "react-icons/fa";

function BouncingArrow({ className, ...rest }) {
    const classnames = cx(className, "button", "bouncing-arrow");

    return (
        <div {...rest}>
            <FaChevronDown className={classnames} />
        </div>
    );
}

export default BouncingArrow;
