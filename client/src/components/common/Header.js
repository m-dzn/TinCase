import React from "react";
import "./Header.scss";
import cx from "classnames";
import Navbar from "./Navbar";

function Header({ className }) {
    const classnames = cx("header", className);

    return (
        <div className={classnames}>
            <Navbar />
        </div>
    );
}

export default Header;
