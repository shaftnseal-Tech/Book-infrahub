import React from 'react';
import  { useState } from "react";
import { Truck, ShieldCheck, BadgeDollarSign, Undo2 } from 'lucide-react';
import FeaturesCard from './FeaturesCard';
import CarouselBanner from './CarouselBanner'
 import '../style/home.css';
 import BookCard from './Bookcard';
import Tabs from "../components/Tab";
import BookList from '../components/Booklist'
import { books } from "../data";
const Home = () => {
    const [selectedTab, setSelectedTab] = useState("new");

  return (<>

<div className="home-container">
      <CarouselBanner />
       <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <BookCard
        title="Drama"
        subtitle="Book"
        image="https://m.media-amazon.com/images/I/41j2c6D-cqL.jpg"
        discount="Save 25% Off"
        buttonText="ORDER NOW"
        borderColor="#ff7ca8"
      />
      <BookCard
        title="50% OFF"
        subtitle="Click to it"
        image="https://cdn-icons-png.flaticon.com/512/3287/3287185.png"
        discount=""
        buttonText="Book More Save More"
        borderColor="#68dbe5"
      />
      <BookCard
        title="Story"
        subtitle="Book"
        image="https://m.media-amazon.com/images/I/41aFlK1Nq8L.jpg"
        discount="Save 25% Off"
        buttonText="ORDER NOW"
        borderColor="#ffe14f"
      />
    </div>

     
    </div> 
   <div className="App">
        <h2>Special Products

</h2>
<p>Contrary to popular belief, Lorem Ipsum is not simply random.</p>
      <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <BookList books={books[selectedTab]} />
    </div>

    <div className="featurescard">
      <FeaturesCard Icon={Truck} title="Free Shipping" subtitle="Order over $100" />
      <FeaturesCard Icon={ShieldCheck} title="Secure Payment" subtitle="100% Secure Payment" />
      <FeaturesCard Icon={BadgeDollarSign} title="Best Price" subtitle="Guaranteed Low Cost" />
      <FeaturesCard Icon={Undo2} title="Easy Return" subtitle="Within 30 Days returns" />
    </div>

    </>
  )
}

export default Home