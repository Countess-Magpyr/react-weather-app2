import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <WeatherSearch />
        <Forecast />
      </div>
    </div>
  );
}
