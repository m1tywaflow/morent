import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const locations = [
  { id: 1, name: "Rental Point A", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Rental Point B", lat: 40.73061, lng: -73.935242 },
  { id: 3, name: "Rental Point C", lat: 40.741895, lng: -73.989308 },
];

const MapComponent = () => {
  return (
    <div className="w-full flex flex-col items-center">
  <h1 className="text-blue-600 text-2xl font-bold mb-4 px-4 py-2 rounded-lg ">
    You can find us here!
  </h1>
  <div className="w-300 h-[500px] rounded-2xl border-4 border-blue-500 p-2 shadow-xl bg-white">
    <MapContainer center={[40.73061, -73.935242]} zoom={12} className="w-full h-full rounded-xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={customIcon}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
</div>

  );
};

export default MapComponent;
