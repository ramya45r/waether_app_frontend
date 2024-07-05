// src/components/HistoricalDataTable.js
import React from 'react';

const HistoricalDataTable = ({ historicalData, filter, setFilter }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="historical-data">
      <h2>Historical Weather Data</h2>
      <div className="filters">
        <label>
          Location:
          <select name="location" value={filter.location} onChange={handleFilterChange}>
            <option value="Delhi">Delhi</option>
            <option value="Moscow">Moscow</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Sydney">Sydney</option>
            <option value="Riyadh">Riyadh</option>
          </select>
        </label>
        <label>
          From:
          <input type="date" name="from" value={filter.from} onChange={handleFilterChange} />
        </label>
        <label>
          To:
          <input type="date" name="to" value={filter.to} onChange={handleFilterChange} />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Location</th>
            <th>Temperature</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(historicalData) && historicalData.length > 0 ? (
            historicalData.map((data, index) => (
              <tr key={index}>
                <td>{new Date(data.date).toLocaleDateString()}</td>
                <td>{data.location}</td>
                <td>{data.temperature}°C</td>
                <td>{data.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalDataTable;
