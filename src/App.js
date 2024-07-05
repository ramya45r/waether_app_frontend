import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import LocationSelector from './components/LocationSelector';
import './App.css';
const baseUrl = process.env.REACT_APP_BASEURL;

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({ lat: 51.505, lon: -0.09 }); 

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/weather/current?lat=${location.lat}&lon=${location.lon}`
      );
      setWeatherData({
        location: response.data.location,
        temperature: response.data.temperature,
        description: response.data.description,
        icon: response.data.icon,
      });
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <LocationSelector setLocation={handleLocationChange} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default App;
