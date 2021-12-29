import React from "react";
import Header from "../common/Header";
import cx from "classnames";
import "./PageTemplate.scss";

function PageTemplate({ children }) {
    const classnames = cx("PageTemplate");
    return (
        <div className={classnames}>
            <Header />
            <main>{children}</main>
        </div>
    );
}

export default PageTemplate;
