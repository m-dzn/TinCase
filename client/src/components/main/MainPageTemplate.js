import React from "react";
import "./MainPageTemplate.scss";
import cx from "classnames";
import { Header } from "components";

function MainPageTemplate({ children }) {
    const containerClass = cx("main-page-template");
    return (
        <div className={containerClass}>
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default MainPageTemplate;
