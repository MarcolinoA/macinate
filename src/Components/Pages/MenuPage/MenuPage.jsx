import React from 'react'
import "./MenuPageStyle.css"
import img from "./provamenu.jpg"
import Navbar from '../../Navbar/Navbar';
import { Carousel } from '../Carousel/Carousel';
import MenuPageDescription from './MenuPageDescription/MenuPageDescription';

const MenuPage = () => {
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