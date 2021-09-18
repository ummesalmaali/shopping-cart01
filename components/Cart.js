import React from "react";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      <header className="">
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
          <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">7</span> items in
          shopping cart{" "}
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="items-info">
              <div className="product-img">
                <Image
                  height="50"
                  width="50"
                  src="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"
                  alt=""
                />
              </div>
              <div className="title">
                <h2>Samsung s21</h2>
                <p>Black color</p>
              </div>
              <div className="add-minus-quantity">
                <i className="fas fa-minus minus"></i>
                <input type="text" placeholder="2" />
                <i className="fas fa-plus add"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
