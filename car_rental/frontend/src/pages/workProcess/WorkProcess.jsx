import React from "react";
import "../../global/container.css";
import "../../global/fonts.css";
import "./WorkProcess.css";
import arrowImage from '../../assets/images/arrowImage.webp'
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
const WorkProcess = () => {
  return (
    <>
      {/* Header Section */}
      <header className="carRentalNavbar">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="workProcess">
        <div className="container">
          <div className="workProcessWrap">
            <h1 className="processHeading">How It Works</h1>
            <div className="cards">
              <div className="workProcessCards">
                <h2>Explore Available Cars</h2>
                <p>
                  Start your journey by browsing our vast collection of rental
                  cars. Use our easy-to-navigate platform to search for cars by:
                </p>
                <ul>
                  <li> Find cars available in your city or destination.</li>
                  <li>Filter cars that fit your budget.</li>
                  <li>Choose from sedans, SUVs, luxury cars, and more.</li>
                  <li>
                    Check if the car is available on your preferred dates.
                  </li>
                </ul>
              </div>
              <img className="arrowImage" src={arrowImage} alt="arrow " />
              <div className="workProcessCards">
                <h2> Select Your Perfect Ride</h2>
                <p>
                  Once you find a car that fits your needs, click on it to view
                  all the details, including:
                </p>
                <ul>
                  <li>
                    See photos of the vehicle to know exactly what you're
                    renting.
                  </li>
                  <li>
                    Get transparent, upfront pricing, including daily rates and
                    any additional fees.
                  </li>
                  <li>Know where to pick up and return the car</li>
                  <li>
                    View important details such as fuel type, transmission, and
                    mileage limits.
                  </li>
                </ul>
              </div>
              <img className="arrowImage02" src={arrowImage} alt="arrow " />
              <div className="workProcessCards">
                <h2> Confirm Your Booking</h2>
                <p>Once your booking request is submitted:</p>
                <ul>
                  <li>Get immediate confirmation for available cars.</li>
                  <li>
                    Pay online or at the time of pick-up based on your
                    preference.
                  </li>
                  <li>
                    Receive a detailed email with all your rental details.
                  </li>
                </ul>
              </div>
              <img className="arrowImage03" src={arrowImage} alt="arrow " />
              <div className="workProcessCards">
                <h2> Enter Booking Information</h2>
                <p>
                  When you’ve made your choice, fill out a simple booking form:
                </p>
                <ul>
                  <li>Pick-up & Drop-off Location</li>
                  <li>Dates & Time</li>
                  <li>Your Contact Information</li>
                </ul>
              </div>
              <img className="arrowImage04" src={arrowImage} alt="arrow " />
              <div className="workProcessCards">
                <h2> Pick Up Your Car</h2>
                <p>On the day of your rental:</p>
                <ul>
                  <li>
                    Go to the specified pick-up point at the scheduled time.
                  </li>
                  <li>Provide your booking reference for quick processing.</li>
                  <li>
                    Check the vehicle's condition before taking it on the road.
                  </li>
                </ul>
              </div>
              <img className="arrowImage05" src={arrowImage} alt="arrow " />
              <div className="workProcessCards">
                <h2> Enjoy Your Ride!</h2>
                <p>
                  Drive your rental car with peace of mind. Whether you're on a
                  business trip or a leisure vacation, we've got you covered
                  with:
                </p>
                <ul>
                  <li>
                    24/7 Customer Support in case you need any help during your
                    rental.
                  </li>
                  <li>Flexible Mileage Options to suit your travel plans.</li>
                </ul>
              </div>
              <img className="arrowImage06" src={arrowImage} alt="arrow " />
              <div className="workProcessCards lastCard">
                <h2> Return the Car</h2>
                <p>At the end of your rental period:</p>
                <ul>
                  <li>Drop Off the Car at the designated location.</li>
                  <li>
                    Car Inspection: The car will be checked to ensure it's
                    returned in the same condition.
                  </li>
                  <li>
                    Receive Your Receipt: Get your final receipt via email,
                    including any applicable charges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Declaration */}
      <footer className="carRentalFooter">
        <div className="container">
        <Footer/>
        </div>
      </footer>
    </>
  );
};

export default WorkProcess;
