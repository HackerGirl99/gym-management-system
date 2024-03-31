import React from 'react'
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

import Bookingcomp from '../components/Booking/Booking.jsx';

const  Booking = () => {
  return (
    <div>
        <Header activeHeading={4} />
       <Bookingcomp/>
        <Footer /> 
    </div>
  )
}


export default Booking