import React from "react";
import CardFeature from "./CardFeature";

const CardFeatureList = ({ books }) => (
  <div className="book-list">
    {books.map((book, idx) => (
      <CardFeature key={idx} {...book} />
    ))}
  </div>
);

export default CardFeatureList;
