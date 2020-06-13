import { ADD_TO_CART, ADD_TO_ORDER, LOGIN } from "./actionTypes";

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload,
});

export const addToOrder = (payload) => ({
    type: ADD_TO_ORDER,
    payload,
});


export const login = (payload) => ({
    type: LOGIN,
    payload,
});
