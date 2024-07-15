import React from 'react';

const LocationInfo = ({ location }) => {
  console.log("Location data received in LocationInfo:", location);

  if (!location) {
    return <p>Loading...</p>;
  }

  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p>City: {location.name}</p>
      <p>Country: {location.country}</p>
      <p>Latitude: {location.latitude !== undefined ? location.latitude : 'Loading...'}</p>
      <p>Longitude: {location.longitude !== undefined ? location.longitude : 'Loading...'}</p>
    </div>
  );
};

export default LocationInfo;
