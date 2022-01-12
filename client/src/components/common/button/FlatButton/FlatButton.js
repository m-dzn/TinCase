import React from "react";
import "./FlatButton.scss";
import cx from "classnames";

function FlatButton({ className, children, ...rest }) {
    const classnames = cx(className, "button", "flat-button");
    return (
        <button className={classnames} {...rest}>
            {children}
        </button>
    );
}

export default React.memo(FlatButton);
