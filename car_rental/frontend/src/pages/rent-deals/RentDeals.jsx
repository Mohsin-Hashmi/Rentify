import React from "react";
import "./RentDeals.css";
import "../../global/container.css";
import Footer from "../../footer/Footer";
import "../../global/fonts.css";
import Navbar from "../../navbar/Navbar";
import BMW from "../../assets/images/bmw-car.webp";
import Search from "../../search/Search"
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
            <img src={BMW} alt="bmw car" />
            <h1>Exclusive Rental Deals.</h1>
            <p>Discover the best offers and save big on your next rental.</p>
            <Search/>
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
