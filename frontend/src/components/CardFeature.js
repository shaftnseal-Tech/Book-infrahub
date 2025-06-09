import React from "react";

const CardFeature = ({ title, price, oldPrice, image }) => (
  <div className="book-card">
    <img src={image} alt={title} />
    <h4>{title}</h4>
    <p>
      <strong>{price}</strong> {oldPrice && <span className="old">{oldPrice}</span>}
    </p>
  </div>
);

export default CardFeature;
