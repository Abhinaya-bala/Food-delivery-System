import { ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionTypes";

export const initState = {
    todo: []
};

export default (state, { type, payload }) => {
    console.log(type, payload);
    switch (type) {

        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, payload]
            };
        case TOGGLE_STATUS: {
            const todoId = payload.id;
            const todoIndex = state.todo.findIndex((todo) => todo.id === todoId);
            const todo = state.todo;
            const todoItem = todo[todoIndex];
            todoItem.status = !todoItem.status;
            console.log("todo status", todoItem.status);
            return {
                ...state,
                todo: [...todo],
            };
        }
        case REMOVE_TODO: {
            const todoId = payload.id;
            const todoIndex = state.todo.findIndex((todo) => todo.id === todoId);
            const todo = state.todo;
            todo.splice(todoIndex, 1);
            return {
                ...state,
                todo: [...todo],
            };
        }
        default:
            return state;
    }
};