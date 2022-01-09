import React, { useState } from "react";
import "./TodoItem.scss";
import cx from "classnames";
import { BiCheck } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";

function TodoItem({ todo }) {
    const [done, setDone] = useState(todo.done);

    const classnames = cx("todo-item", { done });

    return (
        <div className={classnames}>
            <button
                className="check-box"
                onClick={() => setDone((prev) => !prev)}
            >
                <BiCheck />
            </button>
            <label>{todo.text}</label>
            <button className="button-delete">
                <FaRegTimesCircle color="red" />
            </button>
        </div>
    );
}

export default TodoItem;
