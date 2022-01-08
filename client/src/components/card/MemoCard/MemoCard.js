import React from "react";
import "./MemoCard.scss";
import cx from "classnames";
import { BasicCardTemplate } from "components";
import { formatDateUS } from "lib";

function MemoCard({ className, card }) {
    const containerClass = cx("card", "memo-card", className);

    return (
        <BasicCardTemplate
            className={containerClass}
            style={{ background: card.color }}
        >
            <section className="contents">
                <h5>{card?.title} </h5>
                <div className="date">
                    <time>{formatDateUS()}</time>
                </div>
                <div className="text">
                    <p>{card?.content}</p>
                </div>
            </section>
        </BasicCardTemplate>
    );
}

export default MemoCard;
