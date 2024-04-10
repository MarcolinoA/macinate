import React from 'react'
import DivisorIcon from "./DivisorIcon";
import ScreenSizeTracker from '../../SizeTracker/ScreenSizeTracker';


const DivisorFun = () => {
  const windowSize = ScreenSizeTracker();
  let divisors;
  if(windowSize.width > 1050) divisors = new Array(9).fill(null);
  else divisors = new Array(5).fill(null);
  
  return (
    <div className="hours-location-desc-divisor">
      {divisors.map((_, idx) => (
        <div className="divisor-item" key={idx}>
          <DivisorIcon />
        </div>
      ))}
    </div>
  );
};

export default DivisorFun