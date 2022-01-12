import React, { useCallback, useState } from "react";
import "./TodoItem.scss";
import cx from "classnames";
import { BiCheck } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

function TodoItem({
    className,
    isOwner,
    todo,
    onClickDone,
    onClickDelete,
    ...rest
}) {
    const [done, setDone] = useState(todo.done);

    const classnames = cx(className, "todo-item", { done });

    const handleClickDone = useCallback(() => {
        const nextDone = !done;
        onClickDone(todo.id, nextDone);
        setDone(nextDone);
    }, [done, onClickDone, todo]);

    return (
        <div className={classnames} {...rest}>
            <button className="check-box" onClick={isOwner && handleClickDone}>
                <BiCheck />
            </button>
            <label className="todo-label">{todo.text}</label>
            {isOwner && (
                <button
                    className="button-delete"
                    onClick={() => onClickDelete(todo.id)}
                >
                    <FaRegTimesCircle />
                </button>
            )}
        </div>
    );
}

export default TodoItem;
