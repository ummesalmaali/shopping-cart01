import React, { useContext } from "react";
import Image from "next/image";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import ClearCart from "./ClearCart";

const ContextCart = () => {
  const { item } = useContext(CartContext);
  const { clearCart, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <ClearCart />
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <Image
            height="20"
            width="20"
            src="/images/arrow.png"
            alt="cart"
            className="arrow-icon"
          />{" "}
          <h3>Start shopping here</h3>
        </div>
        <div className="cart-icon">
          <Image height="20" width="20" src="/cart.jpg" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem}</span> items
          in shopping cart{" "}
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curElem) => {
                return <Items curElem={curElem} key={curElem.id} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Card Total: <span>{totalAmount}</span>
          </h3>
          <button>Checkout</button>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
        <br />
      </section>
    </>
  );
};

export default ContextCart;
