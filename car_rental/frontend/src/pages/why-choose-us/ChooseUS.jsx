import React from "react";
import "./ChooseUS.css";
import Navbar from "../../navbar/Navbar";
const ChooseUS = () => {
  return (
    <>
    {/* Header Section */}
    <header className="carRentalNavbar">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <section className="chooseUs">
        <div className="container">
          <div className="chooseUsWrap">
            <h1 className="chooseUsHeading">  Why Choose Us? </h1>
            <h2 className="chooseUsSubHeading">1. Diverse Fleet for Every Need</h2>
            <p className="chooseUsPara">Whether you need a compact car for city driving, an SUV for family trips, or a luxury vehicle for special occasions, we have the perfect car to match your needs.</p>
            <h2 className="chooseUsSubHeading">2. Unbeatable Pricing with No Hidden Fees</h2>
            <p className="chooseUsPara">We provide transparent pricing with no surprises. Our competitive rates ensure you get premium service without breaking the bank.</p>
            <h2 className="chooseUsSubHeading">3. Simple and Quick Booking Process</h2>
            <p className="chooseUsPara">Our intuitive platform allows you to search, book, and confirm a rental in just a few clicks. It’s designed to save you time and effort.</p>
            <h2 className="chooseUsSubHeading">4. Flexible Rental Durations</h2>
            <p className="chooseUsPara">From hourly rentals to long-term leasing, we offer flexible plans to suit both short and extended journeys.</p>
            <h2 className="chooseUsSubHeading">5. Safe and Reliable Vehicles</h2>
            <p className="chooseUsPara">Our fleet is regularly inspected, sanitized, and maintained to meet the highest safety standards, ensuring your peace of mind on the road.</p>
            <h2 className="chooseUsSubHeading">6. 24/7 Roadside Assistance and Customer Support</h2>
            <p className="chooseUsPara">Enjoy worry-free travel with round-the-clock support. In case of emergencies, our team is just a phone call away.</p>
            <h2 className="chooseUsSubHeading">7. Multiple Pickup and Drop-off Locations</h2>
            <p className="chooseUsPara">Choose convenient locations for pickup and drop-off, including airports, downtown areas, and other strategic points to make your trip smooth.</p>
            <h2 className="chooseUsSubHeading">8. Seamless Mobile Experience</h2>
            <p className="chooseUsPara">Manage your bookings, access rental history, and receive updates all through our mobile-friendly app, giving you total control at your fingertips.</p>
            <h2 className="chooseUsSubHeading">9. Reward Programs and Discounts</h2>
            <p className="chooseUsPara">Loyal customers enjoy exclusive deals, discounts, and rewards, making every rental even more worthwhile.</p>
            <h2 className="chooseUsSubHeading">10. Eco-Friendly Vehicle Options</h2>
            <p className="chooseUsPara">We care about the environment! Choose from a range of hybrid and electric vehicles for a sustainable travel experience.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUS;
