import React from "react";
import "./Header.scss";
import cx from "classnames";
import { NavbarContainer } from "containers";

function Header({ className }) {
    const classnames = cx("header", className);

    return (
        <div className={classnames}>
            <NavbarContainer />
        </div>
    );
}

export default Header;
