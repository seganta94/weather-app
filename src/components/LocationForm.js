import React, { useState } from 'react';

function LocationForm({ getLocation }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      getLocation(city);
    }
  };

  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <label>
        City:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <button type="submit">Get Location</button>
    </form>
  );
}

export default LocationForm;
