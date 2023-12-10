import ReactWeather from "react-open-weather";
import { data } from "../helpers/weatherInformation";

export default function WeatherInformation() {
  return (
    <div className="WeatherInformation" id="WeatherInformation">
      <h3 className="section-title">Weather Information</h3>
      <ReactWeather
        data={data}
        lang="en"
        locationLabel="Sydney"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      />
    </div>
  );
}
