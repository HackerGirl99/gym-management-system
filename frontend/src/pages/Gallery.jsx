import React from 'react'
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import GalleryComponent from "../components/Gallery/GalleryComponent";
const  Gallery = () => {
  return (
    <div>
        <Header activeHeading={5} />
        <GalleryComponent/>
        <Footer />
    </div>
  )
}

export default Gallery