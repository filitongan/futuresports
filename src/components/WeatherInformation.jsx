import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

export default function WeatherInformation() {
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: process.env.REACT_APP_API_KEY,
  //   lat: "48.137154",
  //   lon: "11.576124",
  //   lang: "en",
  //   unit: "metric",
  // });
  return (
    <div className="WeatherInformation" id="WeatherInformation">
      <h3 className="section-title">Weather Information</h3>
      {/* <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Munich"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      /> */}
    </div>
  );
}
