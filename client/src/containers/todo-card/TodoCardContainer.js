import { TodoCard } from "components";
import React from "react";

const todos = [
    {
        id: 1,
        done: false,
        text: "인터랙티브 투두 작성",
    },
    {
        id: 2,
        done: true,
        text: "백엔드와 투두 컴포넌트 연결",
    },
];

function TodoCardContainer() {
    return <TodoCard todos={todos} />;
}

export default TodoCardContainer;
