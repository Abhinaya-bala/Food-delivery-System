import {
  ADD_TO_CART,
  ADD_TO_ORDER,
  LOGIN,
  SEARCH_RESTAURANTS,
} from "./actionTypes";

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

export const searchRestaurents = (payload) => ({
  type: SEARCH_RESTAURANTS,
  payload: {
    searchText: payload,
  },
});
