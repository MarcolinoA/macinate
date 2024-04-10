import React from "react";
import "./HappeningsPageDescStyle.css";
import DivisorFun from "../../Divisor/DivisorFun";

const HappeningsPageDescription = () => {
  return (
    <div className="happenings-page-desc-container">
      <DivisorFun />
      <h1 className="hours-location-desc-title">Eventi</h1>
      <DivisorFun />
    </div>
  );
};

export default HappeningsPageDescription;
