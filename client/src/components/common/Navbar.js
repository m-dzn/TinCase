import React from "react";
import "./Navbar.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import navMenuRoutes from "router/navMenuRoutes";

function Navbar() {
    const classnames = cx("navbar");

    return (
        <nav className={classnames}>
            <Logo heading="h4" />
            <ul className="menu">
                {navMenuRoutes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>{route.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
