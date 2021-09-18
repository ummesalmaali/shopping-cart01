import React, { createContext } from "react";
import ContextCart from "./ContextCart";
import { products } from "./Products";
export const CartContext = createContext();

const Cart = () => {
  return (
    <CartContext.Provider value={products}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
