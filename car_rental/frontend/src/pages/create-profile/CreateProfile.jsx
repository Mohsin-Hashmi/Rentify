import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
const CreateProfile = () => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <section>
        <div className="container">
          <p>Hello</p>
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
