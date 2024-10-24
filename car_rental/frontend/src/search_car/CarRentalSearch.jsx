import React, { useState } from "react";
import Data from "../data"; // Local data containing car details
import "../search_car/CarRentalSearch.css";

const CarRentalSearch = () => {
  const [location, setLocation] = useState(""); // State for location input
  const [carName, setCarName] = useState(""); // State for car name input
  const [cars, setCars] = useState([]); // State for search results
  const [loading, setLoading] = useState(false); // Loading state

  // Handle form submission main functionality
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent page refresh
    setLoading(true); // Show loading indicator

    // Filter cars based on location and car name
    const filteredCars = Data.filter(
      (car) =>
        car.location.toLowerCase().includes(location.toLowerCase()) &&
        car.name.toLowerCase().includes(carName.toLowerCase())
    );

    // Simulate an API delay for better UX
    setTimeout(() => {
      setCars(filteredCars); // Update the car results
      setLoading(false); // Hide loading indicator
    }, 500);
  };

  return (
    <>
      <h2 className="modalHeading">Search for Car Rentals</h2>

      {/* Form to enter search criteria */}
      <form onSubmit={handleSearch}>
        <label className="Label" htmlFor="location">Enter Location</label>
        <input
          type="text"
          id="location"
          className="locationInput"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter Your Location"
          required
        />

        <label className="Label" htmlFor="carName">Enter Car Name</label>
        <input
          type="text"
          id="carName"
          className="locationInput"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter Car Name"
          required
        />

        <label className="Label date" htmlFor="pickupDate">Pickup Date</label>
        <input type="date" id="pickupDate" className="locationInput" />

        <label className="Label date" htmlFor="returnDate">Return Date</label>
        <input type="date" id="returnDate" className="locationInput" />

        <button className="searchBtn" type="submit">Search</button>
      </form>

      {/* Display search results or loading indicator */}
      {loading ? (
        <p>Loading cars...</p>
      ) : (
        <div className="searchCarGrid">
          {cars.length > 0 ? (
            cars.map((car, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <h3>{car.name}</h3>
                <img
                  src={car.image}
                  alt={car.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <p>Price: RS: {car.pricePerDay} / day</p>
                <p>Location: {car.location}</p>
              </div>
            ))
          ) : (
            <p className="searchCarPara">No cars found matching your criteria.</p>
          )}
        </div>
      )}
    </>
  );
};

export default CarRentalSearch;
