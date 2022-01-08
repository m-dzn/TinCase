import React from "react";
import "./CardList.scss";
import cx from "classnames";

function CardList({ className, cards, onClickCardItem }) {
    const classnames = cx("card-list", className);
    return (
        <div className={classnames}>
            <ul>
                {cards &&
                    cards.map((card, index) => (
                        <li
                            key={card.id}
                            className="card-item"
                            onClick={() => onClickCardItem(index)}
                        >
                            {card.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default CardList;
