import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../global/container.css";
import "./ContactUs.css";
import phoneLogo from '../../assets/images/phoneLogo.webp';
import emailLogo from '../../assets/images/emailLogo.webp';
import locationLogo from '../../assets/images/locationLogo.webp';
const ContactUs = () => {
  return (
    <>
      <Navbar />
      <section className="contactUs">
        <div className="container">
          <div className="contactUsWrapper">
            <h1 className="contactUsHeading">Contact Us</h1>
            <p className="contactUsPara">
              Any question or remarks? Just write us a message!
            </p>
            <div className="ContactUsBodyWrapper">
              <div className="contactUsInfo">
                <h2 className="contactInfoHeading">Contact Information</h2>
                <p className="contactInfoPara">Say something to start a live chat!</p>
                <div className="contactInfoWrapper">
                    <div className="contactInfoWrapperContent">
                        <img src={phoneLogo} alt="phoneLogo" />
                        <p className="infoPara">+1012 3456 789</p>
                    </div>
                    <div className="contactInfoWrapperContent">
                        <img src={emailLogo} alt="emailLogo" />
                        <p className="infoPara">demo@gmail.com</p>
                    </div>
                    <div className="contactInfoWrapperContent">
                        <img src={locationLogo} alt="locationLogo" />
                        <p className="infoPara">
                        132 Dartmouth Street Boston, Massachusetts 02156 United States
                        </p>
                    </div>
                    
                </div>
              </div>
            <div>
                <h1>contact us form</h1>
            </div>
            </div>
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

export default ContactUs;
