import {
  ADD_TO_CART,
  ADD_TO_ORDER,
  REMOVE_FROM_CART,
  LOGIN,
  ADMIN,
  SEARCH_RESTAURANTS,
  UPDATE_FILTER,
} from "./actionTypes";
import data from "../data.json";

export const initState = {
  restaurants: data, // data contain all info
  cart: [],
  orders: [],
  user: {},
  searchText: "",
  isAuthenticated: false,
  filterByRating: "all"
};

export default (state, { type, payload }) => {
  console.log(type, payload);
  switch (type) {
    case ADD_TO_CART:
      console.log(`${ADD_TO_CART}`, payload);
      return { ...state, cart: [...state.cart, payload] };
    //  cart gets updated to current value
    case REMOVE_FROM_CART: {
      const cartId = payload
      const index = state.cart.findIndex(item => item.id === cartId)
      const temp = state.cart
      temp.splice(index, 1)
      console.log(`${REMOVE_FROM_CART}`, payload);
      return { ...state, cart: [...temp] };
    }

    case ADD_TO_ORDER:
      console.log(`${ADD_TO_ORDER}`, payload);
      return { ...state, orders: [...state.orders, payload] };
    case LOGIN:
      console.log(`${LOGIN}`, payload);
      return {
        ...state,
        user: payload,
        isAuthenticated: true, // once login status has to change
      };
    case ADMIN:
      console.log(`${ADMIN}`, payload);
      return {
        ...state,
        user: payload,
        isAuthenticated: true, // once login status has to change
      };

    case SEARCH_RESTAURANTS:
      console.log(`${SEARCH_RESTAURANTS}`, payload);
      return {
        ...state,
        searchText: payload.searchText,
      };
    case UPDATE_FILTER:
      console.log(`${UPDATE_FILTER}`, payload);
      return {
        ...state,
        filterByRating: payload.filterByRating,
      };

    default:
      return state;
  }
};
