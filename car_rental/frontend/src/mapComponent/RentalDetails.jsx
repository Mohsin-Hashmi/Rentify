import React, { useState, useEffect } from "react";
import axios from "axios";
import MapComponent from "./MapComponent";
import './RentalDetails.css'

const RentalDetails = () => {
  const [pickupLocation, setPickupLocation] = useState(null);
  const [dropoffLocation, setDropoffLocation] = useState(null);
  const [pickupAddress, setPickupAddress] = useState("");
  const [dropoffAddress, setDropoffAddress] = useState("");

  const fetchAddress = async (lat, lng, isPickup) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );
      const address = response.data.display_name;
      if (isPickup) setPickupAddress(address);
      else setDropoffAddress(address);
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const handlePickupLocationChange = (coords) => {
    setPickupLocation(coords);
    fetchAddress(coords[0], coords[1], true);
  };

  const handleDropoffLocationChange = (coords) => {
    setDropoffLocation(coords);
    fetchAddress(coords[0], coords[1], false);
  };

  const fetchTravelTime = async () => {
    if (pickupLocation && dropoffLocation) {
      try {
        const response = await axios.post(
          "https://api.openrouteservice.org/v2/directions/driving-car",
          {
            coordinates: [
              [pickupLocation[1], pickupLocation[0]], // Longitude first
              [dropoffLocation[1], dropoffLocation[0]],
            ],
          },
          {
            headers: {
              Authorization: "YOUR_OPENROUTESERVICE_API_KEY",
              "Content-Type": "application/json",
            },
          }
        );

        const duration = response.data.features[0].properties.summary.duration;
        const distance = response.data.features[0].properties.summary.distance;
        alert(
          `Estimated Travel Time: ${(duration / 60).toFixed(
            2
          )} minutes\nDistance: ${(distance / 1000).toFixed(2)} km`
        );
      } catch (error) {
        console.error("Error fetching travel time:", error);
      }
    }
  };

  // Call this function when both pickup and drop-off locations are set
  useEffect(() => {
    if (pickupLocation && dropoffLocation) fetchTravelTime();
  }, [pickupLocation, dropoffLocation]);

  return (
    <div>
      <h1 className="rentalHeading">Pickup Your Location</h1>
      <p className="rentalPara">
        {pickupAddress
          ? `Pickup Location: ${pickupAddress}`
          : "Click on the map to set the pickup location."}
      </p>
      <p>
        {dropoffAddress
          ? `Drop-off Location: ${dropoffAddress}`
          : pickupAddress
          ? "Now click on the map to set the drop-off location."
          : ""}
      </p>
      <MapComponent
        setPickupLocation={handlePickupLocationChange}
        setDropoffLocation={handleDropoffLocationChange}
        pickupLocation={pickupLocation}
        dropoffLocation={dropoffLocation}
      />
    </div>
  );
};

export default RentalDetails;
