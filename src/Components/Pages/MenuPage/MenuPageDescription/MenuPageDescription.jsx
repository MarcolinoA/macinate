import React, { useState } from "react";
import DivisorFun from "../../Divisor/DivisorFun";
import "./MenuPageDescription.css"
import FoodCard from "./MenuCards/FoodCard";
import DrinkCard from "./MenuCards/DrinkCard";
import ScreenSizeTracker from "../../../SizeTracker/ScreenSizeTracker";

const MenuPageDescription = () => {
  const [foodMenu, setFoodMenu] = useState(true);
  const [drinkMenu, setDrinkMenu] = useState(false);
  const windowSize = ScreenSizeTracker();

  const onFoodMenuClick = () => {
    setFoodMenu(true);
    setDrinkMenu(false);
  }

  const onDrinkMenuClick = () => {
    setDrinkMenu(true);
    setFoodMenu(false);
  }
 
  return (
    <div className="menu-page-description">
      <DivisorFun />
      <h1 className="menu-page-desc-title">Menu</h1>
      <DivisorFun />
      <div className="menu-page-btns-container">
        <button className="bn10" onClick={onFoodMenuClick}>
          FOOD MENU
        </button>
        <button className="bn10" onClick={onDrinkMenuClick}>
          DRINK MENU
        </button>
      </div>
      <div className="menu-click-container">
        { foodMenu ? <FoodCard /> : <DrinkCard /> }
      </div>
    </div>
  );
}; 

export default MenuPageDescription;
