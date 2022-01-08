import React from "react";
import { BasicCardTemplate } from "components";
import "./TodoCard.scss";
import cx from "classnames";
import TodoItem from "./TodoItem";

function TodoCard({ card }) {
    const classnames = cx("card", "todo-card");
    return (
        <BasicCardTemplate className={classnames}>
            <h5>Todo 제목</h5>
            {card.todos &&
                card.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
        </BasicCardTemplate>
    );
}

export default TodoCard;
