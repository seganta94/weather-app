import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState([]);

  const getWeather = async (latitude, longitude) => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/weather', {
        params: {
          latitude,
          longitude
        }
      });

      console.log("Response data:", response.data);
      console.log("Response data is an array:", Array.isArray(response.data));
      console.log("Type of response data:", typeof response.data);
      console.log("Structure of response data:", JSON.stringify(response.data, null, 2));

      let weatherData;
      if (typeof response.data === "string") {
        weatherData = JSON.parse(response.data);
      } else {
        weatherData = response.data;
      }

      if (Array.isArray(weatherData)) {
        setWeather(weatherData);
      } else {
        console.error("Unexpected data format received:", weatherData);
        setWeather([]);
      }
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setWeather([]);
    }
  };

  return (
    <div className="App">
      <Header />
      <WeatherForm getWeather={getWeather} />
      {weather.length ? <WeatherInfo weather={weather} /> : <p>Loading...</p>}
      <Footer />
    </div>
  );
}

export default App;
