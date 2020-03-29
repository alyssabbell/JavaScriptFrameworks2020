import React from "react";
import PropTypes from "prop-types";

function TemperatureDisplay(props) {
  //console.log(props);
  return <>{/* Complete me */
  }
  {/* START Move this into <TemperatureDisplay />. (You will see errors and have to fix them when you do this). */}
  <div className="h4">Current Temperature:</div>
          <div className="h1">
            {props.temperature} &deg; {props.scale}
          </div>
          </>;
}

TemperatureDisplay.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.string.isRequired
};

export default TemperatureDisplay;
