import React from "react";
import "./Search.css";
import locationIcon from "../assets/images/location.webp";
import calendarIcon from "../assets/images/calendar.webp";
import Modal from "../modal/CarRentalApp.jsx";
const Search = () => {
  return (
    <>
      <div className="searchCarWrapper">
        <div className="searchCarWrapperCard">
          <div className="cardIcon">
            <img src={locationIcon} alt="location icon" />
          </div>
          <div className="cardContent">
            <h5>Location</h5>
            <p>Search your location</p>
          </div>
        </div>
        <div className="searchCarWrapperCard">
          <div className="cardSeperator">|</div>
          <div className="cardIcon">
            <img src={calendarIcon} alt="calendar icon" />
          </div>
          <div className="cardContent">
            <h5>Pickup date</h5>
            <p>Tue 15 Feb, 09:00</p>
          </div>
        </div>
        <div className="searchCarWrapperCard">
          <div className="cardSeperator">|</div>
          <div className="cardIcon">
            <img src={calendarIcon} alt="calendar icon" />
          </div>
          <div className="cardContent">
            <h5>Return date</h5>
            <p>Thu 16 Feb, 11:00</p>
          </div>
        </div>
        {/* Search Button */}
        <Modal />
      </div>
    </>
  );
};

export default Search;
