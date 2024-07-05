import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { location, temperature, description, icon } = weatherData;

  return (
    <div className="weather-card">
      <h2>{location}</h2>
      <div>
        <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
        <span>{description}</span>
      </div>
      <div>
        <h3>{temperature}&deg;C</h3>
      </div>
    </div>
  );
};

export default WeatherCard;
