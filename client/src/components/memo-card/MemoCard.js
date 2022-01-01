import React from "react";
import "./MemoCard.scss";
import cx from "classnames";
import { BasicCardTemplate } from "components";
import { formatDate } from "lib";

function MemoCard({ className, card }) {
    const containerClass = cx("card", "memo-card", className);

    return (
        <BasicCardTemplate
            className={containerClass}
            style={{ background: card.themeColor }}
        >
            <section className="contents" style={{ color: "black" }}>
                <h5>{card?.title} </h5>
                <div className="date">
                    <time>{formatDate()}</time>
                </div>
                <div className="text">
                    <p>{card?.content}</p>
                </div>
            </section>
        </BasicCardTemplate>
    );
}

export default MemoCard;
