import React from "react";
import "./CardList.scss";
import cx from "classnames";
import CardListItem from "./CardListItem";
import { FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";

function CardList({ className, deck, cards, onClickCardItem }) {
    const classnames = cx("card-list", className);
    return (
        <article className={classnames}>
            <header>
                <h5 className="list-title">덱 카드 목록</h5>
                <button
                    className={cx("button", "like-button", {
                        liked: deck?.liked,
                    })}
                >
                    {deck?.liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </header>
            <div className="list-body">
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
            </div>
            <footer>
                <button className="add-card">
                    <FaPlus />새 카드 생성
                </button>
            </footer>
        </article>
    );
}

export default CardList;
