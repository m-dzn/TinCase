import React from "react";
import "./BouncingArrow.scss";
import cx from "classnames";
import { FaChevronDown } from "react-icons/fa";

function BouncingArrow({ className, innerRef, ...rest }) {
    const classnames = cx(className, "button", "bouncing-arrow");

    return (
        <div ref={innerRef} {...rest}>
            <FaChevronDown className={classnames} />
        </div>
    );
}

export default React.memo(BouncingArrow);
