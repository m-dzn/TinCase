import React, { useState } from "react";
import "./TodoItem.scss";
import cx from "classnames";
import { FaRegTimesCircle } from "react-icons/fa";

function TodoItem({ todo }) {
    const classnames = cx("todo-item");
    const [done, setDone] = useState(todo.done);

    return (
        <div className={classnames}>
            <input
                type="checkbox"
                checked={done}
                onChange={() => setDone((state) => !state)}
            />
            <label>{todo.text}</label>
            <button className="button-delete">
                <FaRegTimesCircle color="red" />
            </button>
        </div>
    );
}

export default TodoItem;
