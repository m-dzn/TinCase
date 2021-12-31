import React from "react";
import "./Logo.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

function Logo({ heading: Heading = "h3", className }) {
    const classnames = cx("logo", className);

    return (
        <Link to="/" className={classnames}>
            <Heading>TinCase</Heading>
        </Link>
    );
}

export default Logo;
