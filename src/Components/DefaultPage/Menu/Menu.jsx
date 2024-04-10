import React from "react";
import prova_img from "./lasagna.jpg";
import "./MenuStyle.css";
import TapasIcon from "./Icons/TapasIcon";
import BreadIcon from "./Icons/BreadIcon";
import OilIcon from "./Icons/OilIcon";
import { Link } from "react-scroll";
import ScreenSizeTracker from "../../SizeTracker/ScreenSizeTracker";
import ScrollIcon from "../Icons/ScrollDown";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const windowSize = ScreenSizeTracker();

  return (
    <div className="menu-container">
      <div className="menu-content">
        <div
          className="image-menu-container"
          style={{
            backgroundImage: `url(${prova_img})`,
            backgroundPosition: "50.0% 50.0%",
            borderRadius: "40px",
            zIndex: 2,
          }}
        ></div>

        <div className="description-menu-container">
          <h1 className="description-menu-title">IL NOSTRO MENU</h1>
          <p className="description-menu-content">
            The OG is where culinary innovation meets the timeless charm of
            breakfast and lunch classics. Our menu, a treasure trove of gourmet
            pancakes, artisanal breakfast cocktails, and the best mimosas in
            Denver, promises an unrivaled dining experience.
          </p>
          <p className="description-menu-content">
            Savor the flavors of Denver from decadent French toast to savory
            benedicts, each dish at The OG is crafted to perfection, making us
            the go-to spot for weekend brunch in Denver. Whether you're
            indulging in a family-friendly brunch or seeking the perfect brunch
            spot for a lazy Sunday, The OG's unique menu caters to all.
          </p>
          <div className="description-menu-footer-container">
            <div className="button-container">
              <NavLink to="/menu-page" className="bn14">SCOPRI I MENU</NavLink>
              <NavLink to="/menu-page" className="bn14">LA GALLERY</NavLink>
            </div>
            <div className="menu-footer-icon">
              {windowSize.width > 1050 ? (
                <>
                  <TapasIcon />
                  <BreadIcon />
                  <OilIcon />
                </>
              ) : (
                <> </>
              )}
            </div>
          </div>
        </div>
      </div>
      {windowSize.width > 875 ? (
        <div className="arrow-gif">
          <Link activeClass="active" smooth spy to="happenings">
            <ScrollIcon />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
