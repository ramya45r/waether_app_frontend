import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { location, temperature, description, icon } = weatherData;

  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <h3>{temperature}°C</h3>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
