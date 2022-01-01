import React from "react";
import { BasicCardTemplate } from "components";
import "./TodoCard.scss";
import cx from "classnames";

const todo = {
    id: 1,
    text: "",
};

function TodoCard() {
    const classnames = cx("card", "todo-card");
    return (
        <BasicCardTemplate className={classnames}>
            <h5>Todo 제목</h5>
            <label></label>
            <input type="checkbox" />
        </BasicCardTemplate>
    );
}

export default TodoCard;
