import React from "react";
import { Link } from "react-scroll";
import img_prova_happenings from "./img_prova.jpg";
import PartyIcon from "./Icons/PartyIcon";
import Arrow from "../Icons/ArrowDown.gif";
import ScreenSizeTracker from "../../SizeTracker/ScreenSizeTracker";
import "./HappeningsStyle.css";
import ScrollIcon from "../Icons/ScrollDown";
import { NavLink } from "react-router-dom";

const Happenings = () => {
  const windowSize = ScreenSizeTracker();

  return (
    <div className="happenings-container">
      <div className="happenings-content">
        <div className="description-happenings-container">
          <h1 className="description-happenings-title">EVENTI</h1>
          <p className="description-happenings-content">
            Stay tuned to our website and social media for the latest happenings
            and exclusive events at The OG, the heart of Denver's dynamic brunch
            and dining scene. Indulge in our themed brunches, relish our monthly
            specials, and join us in giving back to the community. There’s
            always something new and exciting to look forward to.
          </p>
          <p className="description-happenings-content">
            Whether you’re a local foodie or a visitor exploring the wonders of
            Denver, our doors are always open, inviting you to a place where
            every brunch is not just a meal, but an OG experience.
          </p>
          <p className="description-happenings-content">
            Don’t miss out – book your table today and follow us on Instagram
            for daily inspirations and surprises!
          </p>
          <div className="description-happenings-footer-container">
            <div className="happenings-button-container">
              <NavLink className="bn15" to="happenings-page">SCOPRI GLI EVENTI</NavLink>
            </div>
            <div className="happenings-footer-icon">
              {windowSize.width > 1050 ? (
                <>
                  <PartyIcon />
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div
          className="image-happenings-container"
          style={{
            backgroundImage: `url(${img_prova_happenings})`,
            backgroundPosition: "50% 50%",
            borderRadius: "40px",
            zIndex: 2,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Happenings;
