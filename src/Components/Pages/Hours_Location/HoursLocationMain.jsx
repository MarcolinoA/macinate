import React from 'react'
import Navbar from "../../Navbar/Navbar";
import { Carousel } from '../Carousel/Carousel';
import "./HoursLocationStyle.css"
import img from "./img_prova.jpg"
import HoursLocationDescription from './HoursLocationDescription/HoursLocationDescription';

const HoursLocationMain = () => {
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
    <div className="hours-location-container">
      <header className="hours-location-header">
        <Navbar />
      </header>
      <div className="hours-location-gallery">
        <Carousel data={data}/>
      </div>
      <div className="hours-location-description">
        <HoursLocationDescription />
      </div>
    </div>
  )
}

export default HoursLocationMain