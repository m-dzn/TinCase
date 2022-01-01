import React from "react";
import { CardDetailPageTemplate } from "components";
import TodoCardContainer from "containers/todo-card/TodoCardContainer";

function TodoPage() {
    return (
        <CardDetailPageTemplate>
            <TodoCardContainer />
        </CardDetailPageTemplate>
    );
}

export default TodoPage;
