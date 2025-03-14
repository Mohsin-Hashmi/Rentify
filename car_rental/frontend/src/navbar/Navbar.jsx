import React, { useEffect, useState } from "react";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import DarkMode from "../darkMode/DarkMode";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import rentcarlogo from "../assets/images/rentcarlogo.webp";
import hamburgerIcon from "../assets/images/hamburger-icon-logo.webp";
import crossIcon from "../assets/images/closeIcon.webp";

export default function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  /**
   * Function Starts here
   */
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

  const handleLogout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleCreateProfile = () => {
    navigate("/create-profile");
  };
  return (
    <>
      <div className={`carRentalNavbarWrapper  ${scrolled ? "scrolled" : ""}`}>
        <div className="navbarOptions02">
          <Link
            to="/home"
            className="rentCarLogo"
            onClick={() => props.dataOne && props.dataOne()}
          >
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
                  <Link
                    to="/rent-car"
                    onClick={() => props.dataOne && props.dataOne()}
                  >
                    Become a renter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/rent-deals"
                    onClick={() => props.dataOne && props.dataOne()}
                  >
                    Rental deals
                  </Link>
                </li>
                <li>
                  <Link
                    to="/workprocess"
                    onClick={() => props.dataOne && props.dataOne()}
                  >
                    How it work
                  </Link>
                </li>
                <li>
                  <Link
                    to="/chooseus"
                    onClick={() => props.dataOne && props.dataOne()}
                  >
                    Why choose us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    onClick={() => props.dataOne && props.dataOne()}
                  >
                    Contact Us
                  </Link>
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
              <Link
                to="/rent-car"
                onClick={() => props.dataOne && props.dataOne()}
              >
                Become a renter
              </Link>
            </li>
            <li>
              <Link
                to="/rent-deals"
                onClick={() => props.dataOne && props.dataOne()}
              >
                Rental deals
              </Link>
            </li>
            <li>
              <Link
                to="/workprocess"
                onClick={() => props.dataOne && props.dataOne()}
              >
                How it work
              </Link>
            </li>
            <li>
              <Link
                to="/chooseus"
                onClick={() => props.dataOne && props.dataOne()}
              >
                Why choose us
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={() => props.dataOne && props.dataOne()}
              >
                Contact Us
              </Link>
            </li>
          </nav>
        </div>
        <div className="navbarBtns">
          <DarkMode className="darkMode" />

          <button className="createProfile" onClick={handleCreateProfile}>
            Create Profile
          </button>
          <button className="signUpBtn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
