import React from 'react'
import Footer from "../components/Layout/Footer.jsx";
import Header from "../components/Layout/Header.jsx";

import Booking from '../components/Booking/Booking.jsx';

const  Booking = () => {
  return (
    <div>
        <Header activeHeading={4} />
       <Booking></Booking>
        <Footer />
    </div>
  )
}

export default Booking