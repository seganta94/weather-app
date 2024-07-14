import React from 'react';

const WeatherInfo = ({ weather }) => {
  console.log("Weather data received in WeatherInfo:", weather);

  if (!weather || !Array.isArray(weather) || weather.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Weather Information</h2>
      <h3>Daily Temperature</h3>
      {weather.map((data, index) => (
        <div key={index}>
          <p>Date: {new Date(data.time).toLocaleDateString()}</p>
          <p>Max Temperature: {data.apparent_temperature_max} °C</p>
          <p>Min Temperature: {data.apparent_temperature_min} °C</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherInfo;
