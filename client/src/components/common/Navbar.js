import React from "react";
import "./Navbar.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { routes } from "router";

function Navbar() {
    const classnames = cx("navbar");

    return (
        <nav className={classnames}>
            <Logo heading="h4" />
            <ul className="menu">
                {routes.map(
                    (route) =>
                        route.nav && (
                            <li key={route.path}>
                                <Link to={route.path}>{route.label}</Link>
                            </li>
                        )
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
