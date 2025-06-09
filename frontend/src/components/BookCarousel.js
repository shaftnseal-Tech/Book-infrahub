// src/components/IndividualIntervalsExample.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../components/CarouselImage'; //
//  Make sure the path is correct

function BookCarousel() {
  return (<>
    <Carousel>
      <Carousel.Item interval={1000}>
        <CarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
<button className="shop-now-btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <CarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button className="shop-now-btn">Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
<button className="shop-now-btn">Shop Now</button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  );
}

export default BookCarousel;
