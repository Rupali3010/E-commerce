import * as types from "../Action/actionType";

let initialState = {
  Createusers: [],
  login: [],
  basket: [],
};

let basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        Createusers: action.payload,
      };

    case "LOGIN_USER":
      return {
        ...state,
        login: action.payload,
      };

    case types.ADD_TO_BASKET:
      const newBasket = [...state.basket, action.payload];
      return { ...state, basket: newBasket };

    case types.remove_from_cart: {
      let updatedCart = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        updatedCart.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedCart,
      };
    }
    default:
      return state;
  }
};

export default basketReducer;
