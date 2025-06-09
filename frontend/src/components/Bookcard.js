// BookCard.js
import React from 'react';
import { motion } from 'framer-motion';
import '../style/Bookcard.css';

const BookCard = ({ title, subtitle, image, discount, buttonText, borderColor }) => {
  return (
    <motion.div
      className="book-card"
      style={{ border: `5px solid ${borderColor}` }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <p className="discount">{discount}</p>
      <img src={image} alt={title} className="book-image" />
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <button className="order-btn">{buttonText}</button>
    </motion.div>
  );
};

export default BookCard;
