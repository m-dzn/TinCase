import React from "react";
import "./Header.scss";
import cx from "classnames";

function Header({ className }) {
    const classnames = cx("Header", className);

    return <div className={classnames}>헤더</div>;
}

export default Header;
