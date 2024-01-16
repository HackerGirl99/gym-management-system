import React from 'react'
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Registry from "../components/Registry/Registry";
const HomePage = () => {
  return (
    <div>
       <Header activeHeading={1} />
      <Registry/>
        <Footer />
    
    </div>
  )
}

export default HomePage