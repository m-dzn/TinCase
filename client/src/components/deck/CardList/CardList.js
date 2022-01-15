import React, { useCallback, useState } from "react";
import "./CardList.scss";
import cx from "classnames";
import CardListItem from "./CardListItem";
import { FaHeart, FaPlus, FaRegHeart, FaTrashAlt } from "react-icons/fa";

function CardList({
    className,
    deck,
    cards,
    isOwned,
    onToggleLiked,
    onClickCardItem,
    onClickDeleteDeck,
    onClickDeleteCard,
}) {
    const classnames = cx("card-list", className);
    const [liked, setLiked] = useState(deck.liked);
    const likeButtonClassnames = cx("button", "like-button", {
        liked,
    });

    const handleToggleLiked = useCallback(
        (isLiked) => {
            onToggleLiked(isLiked);
            setLiked(!isLiked);
        },
        [onToggleLiked]
    );

    return (
        <article className={classnames}>
            <header>
                <h5 className="list-title">덱 카드 목록</h5>
                <div className="button-group">
                    {!isOwned ? (
                        <button
                            className={likeButtonClassnames}
                            onClick={() => handleToggleLiked(liked)}
                        >
                            {liked ? <FaHeart /> : <FaRegHeart />}
                        </button>
                    ) : (
                        <button
                            className="button delete-button"
                            onClick={onClickDeleteDeck}
                        >
                            <FaTrashAlt />
                        </button>
                    )}
                </div>
            </header>
            <div className="list-body">
                <ul>
                    {cards &&
                        cards.map((card, index) => (
                            <CardListItem
                                key={card.id}
                                card={card}
                                isOwned={isOwned}
                                onClick={() => onClickCardItem(index)}
                                onClickDeleteCard={onClickDeleteCard}
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

export default React.memo(CardList);
