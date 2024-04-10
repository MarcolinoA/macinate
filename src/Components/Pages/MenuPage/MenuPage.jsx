import React from 'react'
import "./MenuPageStyle.css"
import img1 from "./Assets/lasagna.jpg";
import img2 from "./Assets/fotomenu2.jpg";
import img3 from "./Assets/fotomenu3.jpg";
import img4 from "./Assets/fotomenu4.jpg";
import Navbar from '../../Navbar/Navbar';
import { Carousel } from '../Carousel/Carousel';
import MenuPageDescription from './MenuPageDescription/MenuPageDescription';

const MenuPage = () => {
  const data = [
    {
      src: img2,
      alt: "Image 2 for carousel"
    },
    {
      src: img1,
      alt: "Image 1 for carousel"
    },
    {
      src: img3,
      alt: "Image 3 for carousel"
    },
    {
      src: img4,
      alt: "Image 4 for carousel"
    }
  ];

  return (
    <div className="menu-page-container">
      <header className="menu-page-header">
        <Navbar />
      </header>
      <div className="menu-page-gallery">
        <Carousel data={data}/>
      </div>
      <div className="menu-page-description-component">
        <MenuPageDescription />
      </div>
    </div>
  )
}

export default MenuPage