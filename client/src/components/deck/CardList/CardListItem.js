import React from "react";
import "./CardListItem.scss";
import cx from "classnames";
import { CARD } from "constants";
import {
    BsFillFileCheckFill,
    BsFillFileFill,
    BsFillFileFontFill,
    BsFillFilePlayFill,
} from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

function CardListItem({
    className,
    card,
    isOwned,
    onClickDeleteCard,
    ...rest
}) {
    const classnames = cx(className, "card-list-item");

    if (card.type === "NEW") {
        return (
            <li className={`${classnames} new`} {...rest}>
                <div className="text">새 카드 생성</div>
            </li>
        );
    }

    const getTypeIcon = (type) => {
        switch (type) {
            case CARD.TYPE.MEMO:
                return <BsFillFileFontFill className="memo" />;
            case CARD.TYPE.TODO:
                return <BsFillFileCheckFill className="todo" />;
            case CARD.TYPE.VIDEO_LINK:
                return <BsFillFilePlayFill className="video-link" />;
            default:
                return <BsFillFileFill className="etc" />;
        }
    };

    const TypeIcon = getTypeIcon(card.type);

    return (
        <li className={classnames} {...rest}>
            <div className="flag"></div>
            <div className="icon">{TypeIcon}</div>
            <div className="text">{card.title}</div>
            {isOwned && (
                <button
                    className="button delete-card"
                    onClick={() => onClickDeleteCard(card.id)}
                >
                    <FaTrashAlt />
                </button>
            )}
        </li>
    );
}

export default React.memo(CardListItem);
