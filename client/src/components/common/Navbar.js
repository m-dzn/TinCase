import React from "react";
import "./Navbar.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
    const classnames = cx("navbar");

    return (
        <nav className={classnames}>
            <Logo heading="h4" />
            <ul className="menu">
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/test">Test</Link>
                </li>
                <li>
                    <Link to="/test">Client</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
