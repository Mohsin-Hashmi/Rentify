import React from "react";
import "./RentDeals.css";
import "../../global/container.css";
import Footer from "../../footer/Footer";
import "../../global/fonts.css";
import Navbar from "../../navbar/Navbar";
const RentDeals = () => {
  return (
    <>
      {/* Header Section */}
      <header className="carRentalNavbar">
        <div className="container">
          <Navbar />
        </div>
      </header>
      {/* Body Section  */}
      <section className="rentDeals">
        <div className="container">
          <div className="rentDealsWrap">
            <p> this is rent deal page</p>
            <h1>This is Heading one</h1>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="carRentalFooter">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default RentDeals;
