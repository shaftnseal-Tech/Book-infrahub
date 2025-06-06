import React from "react";

const Cards = ({ title, price, oldPrice, image }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>
      <strong>{price}</strong> {oldPrice && <span className="old">{oldPrice}</span>}
    </p>
  </div>
);

export default Cards;
