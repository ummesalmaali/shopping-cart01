import React, { createContext, useReducer } from "react";
import ContextCart from "./ContextCart";
import { products } from "./Products";
export const CartContext = createContext();

const initialValue = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }
  return state;
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  //function for deleting an individual item from the cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  return (
    <CartContext.Provider value={{ ...state, removeItem }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
