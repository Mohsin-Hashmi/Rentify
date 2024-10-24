import React, { useState } from "react";
import "../showCarsModal/ShowCarsModal.css";
import ShowAllCars from "../showAllCars/ShowAllCars.jsx";

const ShowCarsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  // close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };
  return (
    <>
      {/* Second Button */}
      <button className="seeAllVehicals" onClick={openModal}>
        Show all vehicles
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
          <div className="modal-content-search">
            <button
              className="close-button-search "
              onClick={closeModal}
            ></button>
            <ShowAllCars />
          </div>
        </div>
      )}
    </>
  );
};
export default ShowCarsModal;
