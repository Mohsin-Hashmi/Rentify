import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../modal/CarRentalApp.css";
import CarRentalSearch from "../search_car/CarRentalSearch";

const CarRentalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  // Modal Content with Portal
  const modalContent = isModalOpen ? (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}></button>
        <CarRentalSearch />
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Search Button */}
      <button className="searchCarWrapperCardBtn" onClick={openModal}>
        Search
      </button>

      {/* Render modal in the portal */}
      {ReactDOM.createPortal(modalContent, document.getElementById("modal-root"))}
    </>
  );
};

export default CarRentalApp;

