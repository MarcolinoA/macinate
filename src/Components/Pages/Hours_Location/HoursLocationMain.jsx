import React from 'react'
import Navbar from "../../Navbar/Navbar";
import { Carousel } from '../Carousel/Carousel';
import "./HoursLocationStyle.css"
import img1 from "./Assets/happen1.jpg"
import img2 from "./Assets/happen2.jpg"
import img3 from "./Assets/happen3.jpg"
import img4 from "./Assets/happen4.jpg"
import HoursLocationDescription from './HoursLocationDescription/HoursLocationDescription';

const HoursLocationMain = () => {
  const data = [
    {
      src: img1,
      alt: "Image 1 for carousel"
    },
    {
      src: img2,
      alt: "Image 2 for carousel"
    },
    {
      src: img3,
      alt: "Image 3 for carousel"
    },
    {
      src: img4,
      alt: "Image 4 for carousel"
    },
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