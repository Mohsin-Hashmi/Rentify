import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../global/container.css";
import "../../global/fonts.css";
import "./CarRenter.css";
const CarRenter = () => {
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
            <form id="rentalForm" enctype="multipart/form-data">
              {/* <!-- Car Name --> */}
              <div class="form-group">
                <label htmlFor="carName">Car Name</label>
                <input
                  type="text"
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
                  name="carImage"
                  accept="image/*"
                  required
                />
              </div>

              {/* <!-- Car Description --> */}
              <div class="form-group">
                <label htmlFor="carDescription">Car Description</label>
                <textarea
                  id="carDescription"
                  name="carDescription"
                  rows="4"
                  placeholder="Describe your car..."
                  required
                ></textarea>
              </div>

              {/* <!-- Availability Dates --> */}
              <div class="form-group dateWraper">
                <div className="dateInputs">
                  <label htmlFor="availability">Availability To</label>
                  <input type="date" id="startDate" name="startDate" required />
                </div>

                <div className="dateInputs">
                  <label htmlFor="availability">Availability From</label>
                  <input type="date" id="endDate" name="endDate" required />
                </div>
              </div>

              {/* <!-- Contact Number --> */}
              <div class="form-group">
                <label for="contactNumber">Contact Number</label>
                <input
                  type="tel"
                  id="contactNumber"
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
