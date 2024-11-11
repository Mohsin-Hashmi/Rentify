import React from "react";
import "../footer/Footer.css";
import { Link } from "react-router-dom";
import footerLogo from "../assets/images/footerLogo.webp";
import footerLocation from "../assets/images/footerLocationIcon.webp";
import footerPhone from "../assets/images/footerCallIcon.webp";
import footerEmail from "../assets/images/footerMailIcon.webp";
import facebookIcon from "../assets/images/facebook.webp";
import instragramIcon from "../assets/images/instagram.webp";
import youtubeIcon from "../assets/images/youtube.webp";

const Footer = (props) => {
  
  return (
    <>
      <div className="carRentalFooterWrap">
        <div className="carRentalAddress">
          <Link to="/home" onClick={()=>props.dataTwo()}>
            <img className="footerLogo" src={footerLogo} alt="footer Logo" />
          </Link>

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
              <Link to="">Career</Link>
            </li>
            <li>
              <Link to="">Car</Link>
            </li>
            <li>
              <Link to="">Packages</Link>
            </li>
            <li>
              <Link to="">Features</Link>
            </li>
            <li>
              <Link to="">Priceline</Link>
            </li>
          </div>
          <div className="listOptions">
            <p>Resources</p>
            <li>
              <Link to="">Download</Link>
            </li>
            <li>
              <Link to="">Help Centre</Link>
            </li>
            <li>
              <Link to="">Guides</Link>
            </li>
            <li>
              <Link to="">Partner Network</Link>
            </li>
            <li>
              <Link to="">Cruises</Link>
            </li>
            <li>
              <Link to="">Developer</Link>
            </li>
          </div>

          <div className="listOptions">
            <p>About Rentcars</p>
            <li>
              <Link to="">Why choose us</Link>
            </li>
            <li>
              <Link to="">Our Storys</Link>
            </li>
            <li>
              <Link to="">Investor Relations</Link>
            </li>
            <li>
              <Link to="">Press Center</Link>
            </li>
            <li>
              <Link to="">Advertise</Link>
            </li>
          </div>

          <div className="listOptions">
            <p>Follow Us</p>
            <div className="socialMediaHandles">
              <li>
                <Link to="">
                  <img src={facebookIcon} alt="facebook icon" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={instragramIcon} alt="instragram icon" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={youtubeIcon} alt="youtube icon" />
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="copyRightPara">
        Copyright 2024 ・ Rentcars, All Rights Reserved
      </p>
    </>
  );
};

export default Footer;
