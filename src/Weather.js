import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row mt-5">
          <div className="col">
            <input
              type="search"
              placeholder="Enter a city.."
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col">
            <button
              type="Submit"
              value="Search"
              className="form-control-btn btn btn-primary shadow-sm"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <ul>
        <li>
          <h1>Montreal</h1>
        </li>
        <li>Friday</li>
        <li>Snow</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.chip.de/ii/7/3/2/2/9/6/4/08780ab814b43aae.jpg"
            alt="Mostly Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Windspeed</li>
            <li>Percipitation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
