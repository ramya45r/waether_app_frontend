import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LocationSelector = ({ setLocation }) => {
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 }); // Default position (London)

  const handleClick = (e) => {
    const { lat, lng } = e.latlng;
    setPosition({ lat, lng });
    setLocation({ lat, lon: lng }); // Update parent component's location state
  };

  return (
    <MapContainer center={position} zoom={13} onClick={handleClick} style={{ height: '300px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Selected Location <br />
          Latitude: {position.lat.toFixed(6)} <br />
          Longitude: {position.lng.toFixed(6)}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LocationSelector;
