import { ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionTypes";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload: { title: payload, status: false, id: Date.now() },
});

export const toggleStatus = (payload) => ({
    type: TOGGLE_STATUS,
    payload,
});

export const removeTodo = (payload) => ({
    type: REMOVE_TODO,
    payload,
});