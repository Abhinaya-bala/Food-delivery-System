import {
  ADD_TO_CART,
  ADD_TO_ORDER,
  LOGIN,
  SEARCH_RESTAURANTS,
  UPDATE_FILTER,
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

export const updateFilter = (payload) => ({
  type: UPDATE_FILTER,
  payload: {
    sortByRating: payload,
  },
});
