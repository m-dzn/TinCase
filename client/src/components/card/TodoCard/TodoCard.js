import React from "react";
import { BasicCardTemplate } from "components";
import "./TodoCard.scss";
import cx from "classnames";
import TodoItem from "./TodoItem";
import { FaPlus } from "react-icons/fa";
import { TODO } from "constants";

function TodoCard({
    isOwner,
    card,
    filter,
    text,
    todos,
    onClickAdd,
    onChangeNewTodo,
    onClickDone,
    onClickDelete,
    onClickFilter,
}) {
    const classnames = cx("card", "todo-card");

    const handleKeyUp = (event) => {
        if (event.key === "Enter") {
            onClickAdd();
        }
    };

    return (
        <BasicCardTemplate className={classnames}>
            <header>
                <h5 className="todo-title">{card.title}</h5>
                <div className="todo-filter">
                    <button
                        className={cx("button", {
                            active: filter === TODO.FILTER.ALL,
                        })}
                        onClick={() => onClickFilter(TODO.FILTER.ALL)}
                    >
                        전체
                    </button>
                    <button
                        className={cx("button", {
                            active: filter === TODO.FILTER.TODO,
                        })}
                        onClick={() => onClickFilter(TODO.FILTER.TODO)}
                    >
                        진행 중
                    </button>
                    <button
                        className={cx("button", {
                            active: filter === TODO.FILTER.DONE,
                        })}
                        onClick={() => onClickFilter(TODO.FILTER.DONE)}
                    >
                        완료
                    </button>
                </div>
                {isOwner && (
                    <div className="todo-editor">
                        <input
                            type="text"
                            placeholder="할 일 추가"
                            value={text}
                            onChange={onChangeNewTodo}
                            onKeyUp={handleKeyUp}
                        />
                        <button className="button" onClick={onClickAdd}>
                            <FaPlus />
                        </button>
                    </div>
                )}
            </header>
            <div className="todo-list">
                {todos &&
                    todos.map((todo) => (
                        <TodoItem
                            isOwner={isOwner}
                            key={todo.id}
                            todo={todo}
                            onClickDone={onClickDone}
                            onClickDelete={onClickDelete}
                        />
                    ))}
            </div>
        </BasicCardTemplate>
    );
}

export default TodoCard;
