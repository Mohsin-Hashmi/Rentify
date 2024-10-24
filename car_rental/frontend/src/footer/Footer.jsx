import React from "react";
import "../footer/Footer.css";
import footerLogo from "../assets/images/footerLogo.webp";
import footerLocation from "../assets/images/footerLocationIcon.webp";
import footerPhone from "../assets/images/footerCallIcon.webp";
import footerEmail from "../assets/images/footerMailIcon.webp";
import facebookIcon from "../assets/images/facebook.webp";
import instragramIcon from "../assets/images/instagram.webp";
import youtubeIcon from "../assets/images/youtube.webp";

const Footer = () => {
  return (
    <>
      <div className="carRentalFooterWrap">
        <div className="carRentalAddress">
          <img className="footerLogo" src={footerLogo} alt="footer Logo" />
          <div className="footerAddress">
            <img src={footerLocation} alt="Location Icon" />
            <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
          </div>
          <div className="footerAddress">
            <img src={footerPhone} alt="Location Icon" />
            <p>+603 4784 273 12</p>
          </div>
          <div className="footerAddress">
            <img src={footerEmail} alt="Location Icon" />
            <a href="mailto:rentcars@gmail.com">rentcars@gmail.com</a>
          </div>
        </div>
        <div className="carRentalFooterOptions">
          <div className="listOptions">
            <p>Our Product</p>
            <li>
              <a href="##">Career</a>
            </li>
            <li>
              <a href="##">Car</a>
            </li>
            <li>
              <a href="##">Packages</a>
            </li>
            <li>
              <a href="##">Features</a>
            </li>
            <li>
              <a href="##">Priceline</a>
            </li>
          </div>
          <div className="listOptions">
            <p>Resources</p>
            <li>
              <a href="##">Download</a>
            </li>
            <li>
              <a href="##">Help Centre</a>
            </li>
            <li>
              <a href="##">Guides</a>
            </li>
            <li>
              <a href="##">Partner Network</a>
            </li>
            <li>
              <a href="##">Cruises</a>
            </li>
            <li>
              <a href="##">Developer</a>
            </li>
          </div>

          <div className="listOptions">
            <p>About Rentcars</p>
            <li>
              <a href="##">Why choose us</a>
            </li>
            <li>
              <a href="##">Our Story</a>
            </li>
            <li>
              <a href="##">Investor Relations</a>
            </li>
            <li>
              <a href="##">Press Center</a>
            </li>
            <li>
              <a href="##">Advertise</a>
            </li>
          </div>

          <div className="listOptions">
            <p>Follow Us</p>
            <div className="socialMediaHandles">
              <li>
                <a href="##">
                  <img src={facebookIcon} alt="facebook icon" />
                </a>
              </li>
              <li>
                <a href="##">
                  <img src={instragramIcon} alt="instragram icon" />
                </a>
              </li>
              <li>
                <a href="##">
                  <img src={youtubeIcon} alt="youtube icon" />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="copyRightPara">
        Copyright 2023 ・ Rentcars, All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
