import React from "react";
import "./HoursLocationDescStyle.css";
import DivisorFun from "../../Divisor/DivisorFun";

const HoursLocationDescription = () => {
  return (
    <div className="hours-location-desc-container">
      <DivisorFun />
      <h1 className="hours-location-desc-title">Orari & Location</h1>
      <DivisorFun />
      <div className="hours-location-links">
        <div className="maps-link">
          <a className="a" href="https://maps.app.goo.gl/edkyM22DWCnggwpf7">
            Via Grazia Deledda, 111, <br />
            73040, Specchia LE
          </a>
        </div>
        <div className="phone-field">
          <a className="a" href="tel:3299297439">
            3299297439
          </a>
        </div>
      </div>
      <div className="hours-content">
        <h4 className="hours-info">APERTI TUTTI I FINE SETTIMANA!</h4>
        <p className="hours-info-two">
          18:00 - 01:00 <br /> (Gli orari possono variare in base ad eventi e
          serate private)
        </p>
      </div>
      <div className="location-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error pariatur
        ratione rerum minus incidunt, culpa est facere laboriosam soluta
        veritatis quia? Eius aliquid tempora totam omnis magnam iste iure
        exercitationem.
      </div>
    </div>
  );
};

export default HoursLocationDescription;
