import React from "react";
import Cards from "../components/card";

const BookList = ({ books }) => (
  <div className="book-list">
    {books.map((book, idx) => (
      <Cards key={idx} {...book} />
    ))}
  </div>
);

export default BookList;
