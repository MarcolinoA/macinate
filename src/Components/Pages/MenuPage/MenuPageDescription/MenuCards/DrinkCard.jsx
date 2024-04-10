import React from "react";
import "./FoodCardStyle.css"

const DrinkCard = () => {
  const drink_menu = [
    {
      id: 1,
      name: "Prova 1",
      ingredients:
        "Two Eggs, Breakfast Potatoes | Choice of Toast: White, Wheat, Rye, Sourdough, Gluten Free | Choice of Protein: Sausage, Bacon, Avocado",
      price: "10",
      allergies: "gluten free, vegetarian",
    },
    {
      id: 2,
      name: "Prova 2",
      ingredients:
        "Two Eggs, Breakfast Potatoes | Choice of Toast: White, Wheat, Rye, Sourdough, Gluten Free | Choice of Protein: Sausage, Bacon, Avocado",
      price: "10",
      allergies: "gluten free, vegetarian",
    },
    {
      id: 3,
      name: "Prova 3",
      ingredients:
        "Two Eggs, Breakfast Potatoes | Choice of Toast: White, Wheat, Rye, Sourdough, Gluten Free | Choice of Protein: Sausage, Bacon, Avocado",
      price: "10",
      allergies: "gluten free, vegetarian",
    },
  ];

  return (
    <div className="food-menu-container">
      <div className="classic-menu">
      <h1 className="menu-title">Drink</h1>
      {drink_menu.map((item) => (
        <div className={`${"item" + item.id}`} key={item.id}>
          <div className="info-container">
            <h2 className="item-name">{item.name}</h2>
            <h3 className="item-ingredients">{item.ingredients}</h3>
            <h4 className="item-price">{item.price}</h4>
            <p className="item-allergies">{item.allergies}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DrinkCard;