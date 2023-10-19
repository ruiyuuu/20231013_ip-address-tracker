// import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";


export function ChangeView({ coords }) {
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map({ geoData }) {

  const center = [geoData.lat, geoData.lng];

  const icon = L.icon({
    iconUrl: "/images/pin.svg",
    iconSize: [46, 56],
    iconAnchor: [23, 56],
  });

  return (
    <MapContainer center={center} zoom={12} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} icon={icon} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
