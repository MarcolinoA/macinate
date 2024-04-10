import React from "react";
import "./HomeStyle.css";
import LogoExt from "./Icons/LogoExt";
import CircleIcon from "./Icons/CircleIcon";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-scroll";
import ScrollIcon from "../Icons/ScrollDown";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <p className="home-header">Macinate Cantine 1931, Specchia LE</p>
        <Navbar />
      </div>

      <div className="hero-container">
        <div className="logo-container">
          <LogoExt className={"logo-ext"} />
        </div>
        <div className="other-container">
          <h1 className="item">Classe</h1>
          <CircleIcon />
          <h1 className="item">Tradizione</h1>
          <CircleIcon />
          <h1 className="item">Famiglia</h1>
        </div>
        <div className="home-button-container">
          <NavLink to="/hours-location-page" className="bn13">
            LA LOCATION <br /> -gallery-
          </NavLink>
        </div>
      </div>
      <div className="arrow-gif">
        <Link activeClass="active" smooth spy to="menu">
          <ScrollIcon className="scroll-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
