import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
import MenuIcon from "./Icons/MenuIcon";
import XIcon from "./Icons/XIcon";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  
  return (
    <nav className="navbar">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <NavLink
            activeclassname="active"
            to="/"
            onClick={handleClick}
            className="nav-links home-link"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeclassname="active"
            to="/menu-page"
            onClick={handleClick}
            className="nav-links"
          >
            Menu
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeclassname="active"
            to="/hours-location-page"
            onClick={handleClick}
            className="nav-links"
          >
            Orari & Location
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeclassname="active"
            to="/happenings-page"
            onClick={handleClick}
            className="nav-links"
          >
            Eventi
          </NavLink>
        </li>
      </ul>
      <div className="nav-icon" onClick={handleClick}>
        {click ? (
          <XIcon className={"menu-icon"} />
        ) : (
          <MenuIcon className={"menu-icon"} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
