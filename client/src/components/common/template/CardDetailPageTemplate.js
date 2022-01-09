import React from "react";
import "./CardDetailPageTemplate.scss";
import cx from "classnames";
import { Navbar } from "components";

function CardDetailPageTemplate({ children }) {
    const containerClass = cx("card-detail-page-template");

    return (
        <div className={containerClass}>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>푸터</footer>
        </div>
    );
}

export default CardDetailPageTemplate;
