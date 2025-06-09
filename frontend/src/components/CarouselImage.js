// src/components/ExampleCarouselImage.js
import React from 'react';

const CarouselImage = ({ text,  }) => {
  const styles = {
    height: '400px',
    backgroundColor: '#777',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem'
  };

  return (
    <div style={styles}>
      {text}
      
    </div>
  );
};

export default CarouselImage;
