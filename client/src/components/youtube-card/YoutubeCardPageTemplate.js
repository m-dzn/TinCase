import React from "react";
import "./YoutubeCardPageTemplate.scss";
import cx from "classnames";
import { Navbar } from "components";

function YoutubeCardPageTemplate({ children }) {
    const containerClass = cx("youtube-card-page-template");

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

export default YoutubeCardPageTemplate;
