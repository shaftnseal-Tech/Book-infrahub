import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import book1 from '../image/book1.png'
import '../style/carouselbanner.css'
const CarouselBanner = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={book1} alt="Book 1" className='bookimg'/>
      </div>
      <div>
        <img src={book1} alt="Book 2" />
      </div>
      <div>
        <img src={book1} alt="Book 3" />
      </div>
    </Carousel>
  );
};

export default CarouselBanner;
