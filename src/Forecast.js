import React from "react";
import "./Forecast.css";

export default function App() {
  return (
    <div className="forecast">
      <div className="weather-forecast d-none d-sm-block" id="forecast">
        <div className="row">
          <div className="col-2 d-none d-sm-block">
            <div className="weather-forcast-date">Mon</div>

            <div class Name="weather-forcast-temperature">
              <span className="weather-forcast-temperature-max">20°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
          <div className="col-2">
            <div className="weather-forcast-date">Mon</div>

            <div className="weather-forcast-temperatur">
              <span className="weather-forcast-temperature-max">20°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
          <div className="col-2">
            <div className="weather-forcast-date">Mon</div>

            <div className="weather-forcast-temperature">
              <span className="weather-forcast-temperature-max">20°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
          <div className="col-2">
            <div className="weather-forcast-date">Mon</div>

            <div className="weather-forcast-temperature">
              <span className="weather-forcast-temperature-max">20°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
          <div className="col-2">
            <div className="weather-forcast-date">Mon</div>

            <div className="weather-forcast-temperature">
              <span className="weather-forcast-temperature-max">20°</span>
              <span className="weather-forecast-temperature-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
