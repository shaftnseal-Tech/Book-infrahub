import React from 'react';
import { useState } from "react";
import { books } from "../data";
import BookCarousel from './BookCarousel';
import BookCard from './Bookcard';
import img1 from '../image/img1.png'
import img2 from '../image/img2.png'
import img3 from '../image/img3.png'
 import Tabs from '../components/Tab.js';
 import CardFeatureList from './CardFeaturesList';
 import '../style/tab.css'
const Home = () => {
  const [selectedTab, setSelectedTab] = useState("new");

  return (<>

<BookCarousel></BookCarousel> 
  
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <BookCard
        title="Drama"
        subtitle="Book"
        image={img3}
        discount="Save 25% Off"
        buttonText="ORDER NOW"
        borderColor="#ff7ca8"
      />
      <BookCard
        title="50% OFF"
        subtitle="Click to it"
        image={img1}
        discount=""
        buttonText="Book More Save More"
        borderColor="#68dbe5"
      />
      <BookCard
        title="Story"
        subtitle="Book"
        image={img2}
        discount="Save 25% Off"
        buttonText="ORDER NOW"
        borderColor="#ffe14f"
      />
       <BookCard
        title="50% OFF"
        subtitle="Click to it"
        image={img1}
        discount=""
        buttonText="Book More Save More"
        borderColor="#68dbe5"
      />
       <BookCard
        title="Drama"
        subtitle="Book"
        image={img3}
        discount="Save 25% Off"
        buttonText="ORDER NOW"
        borderColor="#ff7ca8"
      />
    </div>
     <div className="App">
      <h1>SPECIAL PRODUCTS</h1>
      <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <CardFeatureList books={books[selectedTab]} />
    </div>
    <div className="hero-banner">
      <div className="hero-left">
        <h1 className="hero-year">2023</h1>
        <h2 className="hero-title">BOOKS OFFER TRENDS</h2>
        <p className="hero-subtitle">Special Offer For Drama Book 30% Off</p>
        <button className="hero-button">SHOP NOW</button>
      </div>
      <div className="hero-right">
        <img src={img2} alt="Book stack" />
      </div>
    </div>
    </>
  )
}

export default Home