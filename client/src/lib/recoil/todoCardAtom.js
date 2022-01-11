import { atom, atomFamily, selectorFamily } from "recoil";
import { TODO } from "constants";

export const todosState = atom({
    key: "todosState",
    default: [],
});

export const filteredTodosState = atomFamily({
    key: "filtereTodosState",
    default: selectorFamily({
        key: "filtereTodosState/default",
        get:
            (filter) =>
            ({ get }) => {
                const todos = get(todosState);

                let filteredTodos = todos;

                if (filter === TODO.FILTER.TODO) {
                    filteredTodos = todos.filter((todo) => todo.done === false);
                } else if (filter === TODO.FILTER.DONE) {
                    filteredTodos = todos.filter((todo) => todo.done === true);
                }

                return filteredTodos;
            },
    }),
});
