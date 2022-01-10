import React from "react";
import "./Navbar.scss";
import cx from "classnames";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { routes } from "router";

function Navbar({ user, onClickLogoutBtn }) {
    const classnames = cx("navbar");

    return (
        <nav className={classnames}>
            <Logo heading="h4" />
            <ul className="menu">
                {routes.map(
                    (route) =>
                        route.nav &&
                        (user
                            ? route.isLoggedIn !== false
                            : route.isLoggedIn !== true) && (
                            <li key={route.path}>
                                <Link to={route.path}>{route.label}</Link>
                            </li>
                        )
                )}
                {user && (
                    <li>
                        <button onClick={onClickLogoutBtn}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
