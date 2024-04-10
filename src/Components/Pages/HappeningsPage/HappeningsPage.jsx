import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { Carousel } from '../Carousel/Carousel'
import img from "./provamenu.jpg"
import "./HappeningsPageStyle.css";
import HappeningsPageDescription from './HappeningsPageDescription/HappeningsPageDescription';

const HappeningsPage = () => {
  const data = [
    {
      src: img,
      alt: "Image 1 for carousel"
    },
    {
      src: img,
      alt: "Image 2 for carousel"
    },
    {
      src: img,
      alt: "Image 3 for carousel"
    }
  ];

  return (
    <div className="happenings-page-container">
      <header className="happenings-page-header">
        <Navbar />
      </header>
      <div className="happenings-page-gallery">
        <Carousel data={data}/>
      </div>
      <div className="happenings-page-description-component">
        <HappeningsPageDescription />
      </div>
    </div>
  )
}

export default HappeningsPage