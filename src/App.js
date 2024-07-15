import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import LocationForm from './components/LocationForm';
import LocationInfo from './components/LocationInfo';
import Instruction from './components/Instruction';
import axios from 'axios';
import './App.css';

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [weatherLoading, setWeatherLoading] = useState(false);

  const getLocation = async (city) => {
    setLocationLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/location', {
        params: { city }
      });
      console.log("Response data:", response.data);
      setLocation(response.data);
    } catch (error) {
      console.error("Error fetching the location data", error);
      setLocation(null);
    } finally {
      setLocationLoading(false);
    }
  };

  const getWeather = async (latitude, longitude) => {
    setWeatherLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/weather', {
        params: { latitude, longitude }
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
    } finally {
      setWeatherLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <Instruction />
      <div className="container">
        <div className="left-form">
          <LocationForm getLocation={getLocation} />
          {locationLoading ? <p>Loading...</p> : location ? <LocationInfo location={location} /> : null}
        </div>
        <div className="right-form">
          <WeatherForm getWeather={getWeather} />
          {weatherLoading ? <p>Loading...</p> : weather.length > 0 ? <WeatherInfo weather={weather} /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
