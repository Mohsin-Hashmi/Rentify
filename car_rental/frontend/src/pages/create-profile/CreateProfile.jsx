import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../global/container.css";
import "../../global/fonts.css";
import "./CreateProfile.css";
const CreateProfile = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <section className="createProfileSection">
        <div className="container">
          <div className="createProfileWrap">
            <h1 className="createProfileHeading">Create Your Profile</h1>
            <form action="">
              <div className="formGroup">
                <label className="profileLabel" htmlFor="">First Name</label>
                <input className="profileinputField" type="text" placeholder="Enter Your First Name" required/>
                
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="">Last Name</label>
                <input className="profileinputField" type="text" placeholder="Enter Your Last Name" required/>
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="">Profile Image</label>
                <input className="profileinputField" type="file" placeholder="Insert Your Profile Image" required/>
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="">About</label>
                <textarea className="profileinputField textarea"  placeholder="Enter Your Bio" required/>
              </div>
              <button type="submit" className="profileSubmitBtn">
                Save Profile
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer className="carRentalFooter">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default CreateProfile;
