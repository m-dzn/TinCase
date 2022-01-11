import React from "react";
import "./CardList.scss";
import cx from "classnames";
import CardListItem from "./CardListItem";

function CardList({ className, cards, onClickCardItem }) {
    const classnames = cx("card-list", className);
    return (
        <article className={classnames}>
            <header>
                <h5 className="list-title">덱 카드 목록</h5>
            </header>
            <ul>
                {cards &&
                    cards.map((card, index) => (
                        <CardListItem
                            key={card.id}
                            card={card}
                            onClick={() => onClickCardItem(index)}
                        />
                    ))}
            </ul>
        </article>
    );
}

export default CardList;
