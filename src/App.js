import "./App.css";
import Weather from "./Weather";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <WeatherSearch />
        <Forecast />
      </div>
    </div>
  );
}
