import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";

const MapComponent = ({ pickupLocation, dropoffLocation }) => {
  const Routing = () => {
    const map = useMap();

    useEffect(() => {
      if (pickupLocation && dropoffLocation) {
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(pickupLocation[0], pickupLocation[1]),
            L.latLng(dropoffLocation[0], dropoffLocation[1]),
          ],
          routeWhileDragging: true,
          lineOptions: {
            styles: [{ color: "red", weight: 4 }],
          },
        }).addTo(map);

        return () => map.removeControl(routingControl);
      }
    }, );

    return null;
  };

  return (
    <MapContainer
      center={pickupLocation || [51.505, -0.09]}
      zoom={13}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pickupLocation && <Marker position={pickupLocation} />}
      {dropoffLocation && <Marker position={dropoffLocation} />}
      <Routing />
    </MapContainer>
  );
};

export default MapComponent;




