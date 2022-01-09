import React from "react";
import "./FloatingButton.scss";
import cx from "classnames";

function FloatingButton({ className, icon: Icon, ...rest }) {
    const classnames = cx(className, "button", "floating-button");
    return (
        <button className={classnames} {...rest}>
            {Icon && <Icon />}
        </button>
    );
}

export default FloatingButton;
