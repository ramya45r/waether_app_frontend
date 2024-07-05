// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import HistoricalDataTable from './components/HistoricalDataTable';
import './styles.css';

const App = () => {
  const [weatherData, setWeatherData] = useState({});
  const [historicalData, setHistoricalData] = useState([]);
  const [filter, setFilter] = useState({ location: 'Delhi', from: '', to: '' });

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${location}`);
      setWeatherData(response.data);
      fetchHistoricalData(location);
    } catch (err) {
      console.error("Error fetching weather data: ", err);
    }
  };

  const fetchHistoricalData = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/weather?location=${location}&from=${filter.from}&to=${filter.to}`
      );
      setHistoricalData(response.data);
    } catch (err) {
      console.error("Error fetching historical data: ", err);
    }
  };

  useEffect(() => {
    fetchWeatherData(filter.location);
  }, [filter.location]);

  useEffect(() => {
    fetchHistoricalData(filter.location);
  }, [filter.from, filter.to]);

  return (
    <div className="app">
      <WeatherCard weatherData={weatherData} />
      <HistoricalDataTable historicalData={historicalData} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
