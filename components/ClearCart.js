import React from "react";
import Image from "next/image";

const ClearCart = () => {
  return (
    <div>
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
          <p>0</p>
        </div>
      </header>
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">0</span> items in
          shopping cart{" "}
        </p>
      </section>
    </div>
  );
};

export default ClearCart;
