import React from "react";
import PropTypes from "prop-types";

function TemperatureScale(props) {
  // Complete me
  return <>
   {/* START Move this into <TemperatureScale />. (You will see errors and have to fix them when you do this). */}
   <div
          className="btn-group"
          role="group"
          aria-label="Convert temperature"
        >
          <button
            className="btn btn-outline-primary"
            onClick={() => props.setScale("F")}
          >
            Fahrenheit
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => props.setScale("C")}
          >
            Celsius
          </button>
        </div>
        {/* END */}</>;
}

TemperatureScale.propTypes = {
  setScale: PropTypes.func.isRequired
};

export default TemperatureScale;
