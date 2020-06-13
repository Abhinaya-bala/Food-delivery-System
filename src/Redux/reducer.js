import { ADD_TO_CART, ADD_TO_ORDER, LOGIN } from "./actionTypes";
import data from "../data.json";

export const initState = {
    restaurants: data,
    cart: [],
    orders: [],
    user: {},
    isAuthenticated: false
};

export default (state, { type, payload }) => {
    console.log(type, payload);
    switch (type) {
        case ADD_TO_CART:
            console.log(`${ADD_TO_CART}`, payload);
            return { ...state, cart: [...state.cart, payload] };
        case ADD_TO_ORDER:
            console.log(`${ADD_TO_ORDER}`, payload);
            return { ...state, orders: [...state.orders, payload] };
        case LOGIN:
            console.log(`${LOGIN}`, payload)
            return {
                ...state, user: payload, isAuthenticated: true
            }


        default:
            return state;
    }
};
