import axios from "./";
import { PATH } from "constants";

const { API } = PATH;

export const addTodo = async (newTodo) => {
    const response = await axios.post(API.TODOS.CRUD, newTodo);
    return response.data;
};

export const updateTodo = async (todo) => {
    const response = await axios.patch(`${API.TODOS.CRUD}/${todo.id}`, todo);
    return response.data;
};

export const deleteTodo = async (todoId) => {
    const response = await axios.delete(`${API.TODOS.CRUD}/${todoId}`);
    return response.data;
};
