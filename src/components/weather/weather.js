import React from "react";
import "./weather.scss";

const Weather = props => {

  const { id, cityname, temp_celsius, temp_min, temp_max, description, } = props;

  let weatherIcon = (id) => {

    if (id >= 200 && id < 232) return `wi-thunderstorm`;
    else if (id >= 300 && id <= 321) return `wi-sleet`;
    else if (id >= 500 && id <= 521) return `wi-storm-showers`;
    else if (id >= 600 && id <= 622) return `wi-snow`;
    else if (id >= 701 && id <= 781) return `wi-fog`;
    else if (id === 800) return `wi-day-sunny`;
    else if (id >= 801 && id <= 804) return `wi-day-fog`;
    else if(id === undefined) return `wi-day-fog`;

  }

  return (
    <div className="container mt-5 text-light">             
      {
        temp_celsius && (
          <>
            <div className="Card mx-auto content"> 
              <h1 className="text-white py-3">{cityname}</h1>
              <h5 className="py-4"><i className={`wi ${weatherIcon(id)} display-1`} /></h5>
              <div className="py-3">
                <h1 className="py-2">{temp_celsius}&deg;</h1>
                <span className="px-4">Min&nbsp;&nbsp;{temp_min}&deg;</span>
                <span className="px-4">Max&nbsp;&nbsp;{temp_max}&deg;</span>
              </div>
              <h4 className="py-3 text-capitalize">{description}</h4>
            </div>
          </>
        )
      }
    </div>
  );
};

export default Weather;