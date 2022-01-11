import React, { useState } from "react";
import "./TodoItem.scss";
import cx from "classnames";
import { BiCheck } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

function TodoItem({ className, todo, onClickDelete, ...rest }) {
    const [done, setDone] = useState(todo.done);

    const classnames = cx(className, "todo-item", { done });

    return (
        <div className={classnames} {...rest}>
            <button
                className="check-box"
                onClick={() => setDone((prev) => !prev)}
            >
                <BiCheck />
            </button>
            <label className="todo-label">{todo.text}</label>
            <button
                className="button-delete"
                onClick={() => onClickDelete(todo.id)}
            >
                <FaRegTimesCircle />
            </button>
        </div>
    );
}

export default TodoItem;
