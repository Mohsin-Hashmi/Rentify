/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../global/container.css";
import "../../global/fonts.css";
import "./CarRenter.css";
import { BASE_URL } from "../../utils/constants";

const CarRenter = () => {
  const [carName, setCarName] = useState("");
  const [carImage, setCarImage] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [carLocation, setCarLocation] = useState("");
  const [description, setDescription] = useState("");
  const [availabilityFrom, setAvailabilityFrom] = useState("");
  const [availabilityTo, setAvailabilityTo] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleSubmit = async (e) => {
    
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("carName", carName);
      formData.append("carImage", carImage); 
      formData.append("pricePerDay", pricePerDay);
      formData.append("carLocation", carLocation);
      formData.append("description", description);
      formData.append("availabilityFrom", availabilityFrom);
      formData.append("availabilityTo", availabilityTo);
      formData.append("contactNumber", contactNumber);
      const response = await fetch(`${BASE_URL}/rentCar`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.message || "Invalid Credentials");
      }
      const user = await response.json();
      // Store token in localStorage
      localStorage.setItem("token", user.token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* Header Section */}
      <header className="carRentalNavbar">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="carRenter">
        <div className="container">
          <div className="carRenterWrap">
            <h1 className="carRenterHeading">Rent Your Car</h1>
            <form onSubmit={handleSubmit} id="rentalForm">
              {/* <!-- Car Name --> */}
              <div class="form-group">
                <label htmlFor="carName">Car Name</label>
                <input
                  type="text"
                  value={carName}
                  onChange={(e) => setCarName(e.target.value)}
                  id="carName"
                  name="carName"
                  placeholder="Enter your car name"
                  required
                />
              </div>

              {/* <!-- Car Rent Price --> */}
              <div class="form-group">
                <label htmlFor="carPrice">Rent Price (per day)</label>
                <input
                  type="number"
                  id="carPrice"
                  value={pricePerDay}
                  onChange={(e) => setPricePerDay(e.target.value)}
                  name="carPrice"
                  placeholder="Enter rent price"
                  required
                />
              </div>

              {/* <!-- Location --> */}
              <div class="form-group">
                <label htmlFor="carLocation">Car Location</label>
                <input
                  type="text"
                  id="carLocation"
                  value={carLocation}
                  onChange={(e) => setCarLocation(e.target.value)}
                  name="carLocation"
                  placeholder="Enter your location"
                  required
                />
              </div>

              {/* <!-- Upload Car Image --> */}
              <div class="form-group">
                <label htmlFor="carImage">Upload Car Image</label>
                <input
                  className="chooseFile"
                  type="file"
                  id="carImage"
                  onChange={(e) => setCarImage(e.target.files[0])}
                  name="carImage"
                  accept="image/*"
                  
                />
              </div>

              {/* <!-- Car Description --> */}
              <div class="form-group">
                <label htmlFor="carDescription">Car Description</label>
                <textarea
                  id="carDescription"
                  name="carDescription"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  placeholder="Describe your car..."
                  required
                ></textarea>
              </div>

              {/* <!-- Availability Dates --> */}
              <div class="form-group dateWraper">
                <div className="dateInputs">
                  <label htmlFor="availability">Availability To</label>
                  <input type="date" id="startDate" value={availabilityFrom}  onChange={(e) => setAvailabilityFrom(e.target.value)} name="startDate" required />
                </div>

                <div className="dateInputs">
                  <label htmlFor="availability">Availability From</label>
                  <input type="date" id="endDate" value={availabilityTo}  onChange={(e) => setAvailabilityTo(e.target.value)} name="endDate" required />
                </div>
              </div>

              {/* <!-- Contact Number --> */}
              <div class="form-group">
                <label for="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  name="contactNumber"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* <!-- Submit Button --> */}
              <button type="submit" class="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Footer Declaration */}
      <footer className="carRentalFooter">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default CarRenter;
