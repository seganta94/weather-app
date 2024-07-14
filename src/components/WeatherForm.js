import React, { useState } from 'react';

function WeatherForm({ getWeather }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (latitude && longitude) {
      getWeather(latitude, longitude);
    }
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
