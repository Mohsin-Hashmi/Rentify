import React, { useState } from "react";
import "../modal/CarRentalApp.css";
import CarRentalSearch from "../search_car/CarRentalSearch";

const CarRentalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // open the modal function
  const openModal = () => {
    setIsModalOpen(true);
  };
  // close the modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBackgroundClick=(e)=>{
    if(e.target.classList.contains('modal-overlay')){
      closeModal();
    }
  }
  return (
    <>
      {/*  First Button    */}
      <button className="searchCarWrapperCardBtn" onClick={openModal}>
        Search
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
          <div className="modal-content">
            <button className="close-button " onClick={closeModal}></button>
            <CarRentalSearch />
          </div>
        </div>
      )}
    </>
  );
};
export default CarRentalApp;
