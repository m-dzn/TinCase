import { TodoCard } from "components";
import { filteredTodosState, todoAPI, todosState } from "lib";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function TodoCardContainer({ card }) {
    const [filter, setFilter] = useState("ALL");
    const filteredTodos = useRecoilValue(filteredTodosState(filter));
    const [todos, setTodos] = useRecoilState(todosState);
    const [text, setText] = useState("");

    const handleClickAdd = async () => {
        const newTodo = {
            text,
            cardId: card.id,
        };

        const { todo, message } = await todoAPI.addTodo(newTodo);

        setText("");
        setTodos(filteredTodos.concat(todo));

        if (message) {
            console.log(message);
        }
    };

    const handleChangeNewTodo = (event) => {
        const { value } = event.target;
        setText(value);
    };

    const handleClickDelete = async (todoId) => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            await todoAPI.deleteTodo(todoId);
            setTodos(todos.filter((todo) => todo.id !== todoId));
        }
    };

    const handleClickFilter = (filterType) => {
        setFilter(filterType);
    };

    useEffect(() => {
        if (card.todos) {
            setTodos(card.todos);
        }
    }, [card, setTodos]);

    return (
        <TodoCard
            card={card}
            filter={filter}
            text={text}
            todos={filteredTodos}
            onClickAdd={handleClickAdd}
            onChangeNewTodo={handleChangeNewTodo}
            onClickDelete={handleClickDelete}
            onClickFilter={handleClickFilter}
        />
    );
}

export default TodoCardContainer;
