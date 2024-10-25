import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
// import { Route, Routes, useNavigate } from "react-router-dom";

import rentcarlogo from "../assets/images/rentcarlogo.webp";
import hamburgerIcon from "../assets/images/hamburger-icon-logo.webp";
import crossIcon from "../assets/images/closeIcon.webp";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // Navbar code starts Here.
    <>
      
        <div
          className={`carRentalNavbarWrapper  ${scrolled ? "scrolled" : ""}`}
        >
          <Link to="/home" className="rentCarLogo">
            <img src={rentcarlogo} alt="rent car logo" />
          </Link>
          <div className="hamburger">
            {/* Hamburger Icon */}
            <button
              className="hamburgerButton"
              onClick={() => {
                document.querySelector(".sideMenuWrap").style.display = "block";
              }}
            >
              <img src={hamburgerIcon} alt="hamburger icon" />
            </button>
            <div className="sideMenuWrap">
              {/* close button */}
              <button
                className="closeButton"
                onClick={() => {
                  document.querySelector(".sideMenuWrap").style.display =
                    "none";
                }}
              >
                <img src={crossIcon} alt="cross icon" />
              </button>
              <ul>
                <li>
                  <a href="##">Become a renter</a>
                </li>
                <li>
                  <a href="##">Rental deals</a>
                </li>
                <li>
                  <a href="##">How it work</a>
                </li>
                <li>
                  <a href="##">Why choose us</a>
                </li>
              </ul>
              <div className="hambugerButtons">
                <button className="hanburgerSignInBtn">Sign In</button>
                <button className="hanburgerSignUpBtn">Sign up</button>
              </div>
            </div>
          </div>

          <nav className="navbarOptions">
            <li>
              <a href="##">Become a renter</a>
            </li>
            <li>
              <a href="##">Rental deals</a>
            </li>
            <li>
              <a href="##">How it work</a>
            </li>
            <li>
              {/* <a href="##"></a> */}
              <Link to="/chooseus">Why choose us</Link>
            </li>
          </nav>
          <button
            className="signInBtn"
            onClick={() => {
              //    <Routes>
              //      <Route path="/login" element={<Login/>}></Route>
              //    </Routes>
            }}
          >
            Sign In
          </button>
          <button
            className="signUpBtn"
            onClick={() => {
              //     <Routes>
              //     <Route path="/register" element={<Signup/>}></Route>
              //   </Routes>
            }}
          >
            Sign up
          </button>
        </div>
     
    </>
  );
}
