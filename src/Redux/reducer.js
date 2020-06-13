import { ADD_TODO, TOGGLE_STATUS, REMOVE_TODO } from "./actionTypes";
import data from '../data.json'


export const initState = {
    restaurants: data
};

export default (state, { type, payload }) => {
    console.log(type, payload);
    switch (type) {


        default:
            return state;
    }
};