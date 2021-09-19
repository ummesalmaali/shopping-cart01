import React, { createContext, useEffect, useReducer } from "react";
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
  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }
  if (action.type === "INCREMENT") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "DECREMENT") {
    let updatedCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
        return curElem;
      })
      .filter((curElem) => {
        return curElem.quantity !== 0;
      });
    return { ...state, item: updatedCart };
  }
  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;
        let updatedAmount = price * quantity;

        accum.totalAmount += updatedAmount;
        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
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

  // delete all the items from the car t with single click

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  // function for inrement button by one in every click

  const increment = (id) => {
    return dispatch({ type: "INCREMENT", payload: id });
  };
  const decrement = (id) => {
    return dispatch({ type: "DECREMENT", payload: id });
  };

  // using the useEffect functionality to update the or change state of the cart
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        increment,
        decrement,
        totalAmount: state.totalAmount,
        totalItem: state.totalItem,
      }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
