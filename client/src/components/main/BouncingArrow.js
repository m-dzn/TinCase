import React from "react";
import "./BouncingArrow.scss";
import cx from "classnames";
import { FaChevronDown } from "react-icons/fa";

function BouncingArrow() {
    const classnames = cx("bouncing-arrow");

    return (
        <div>
            <FaChevronDown className={classnames} />
        </div>
    );
}

export default BouncingArrow;
