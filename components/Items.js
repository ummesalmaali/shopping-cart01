import React from "react";
import Image from "next/image";
const Items = ({ curElem }) => {
  const { title, description, img, price } = curElem;
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          {/* <Image src={img} height="50" width="50" alt="image" /> */}
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"></i>
          <input type="text" placeholder="2" />
          <i className="fas fa-plus add"></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove">Delete</i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
