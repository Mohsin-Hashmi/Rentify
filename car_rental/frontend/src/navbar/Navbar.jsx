// import React from "react";
// import "../navbar/Navbar.css";
// // import { Route, Routes, useNavigate } from "react-router-dom";

// import rentcarlogo from "../assets/images/rentcarlogo.webp";
// import hamburgerIcon from "../assets/images/hamburger-icon-logo.webp";
// import crossIcon from "../assets/images/closeIcon.webp";
// export default function Navbar() {
//   return (
//     // Navbar code starts Here.
//     <>
//       <header className="carRentalNavbar">
//         <div className="container">
//           <div className="carRentalNavbarWrapper">
//             <a className="rentCarLogo" href="##">
//               <img src={rentcarlogo} alt="rent car logo" />
//             </a>
//             <div className="hamburger">
//               {/* Hamburger Icon */}
//               <button
//                 className="hamburgerButton"
//                 onClick={() => {
//                   document.querySelector(".sideMenuWrap").style.display =
//                     "block";
//                 }}
//               >
//                 <img src={hamburgerIcon} alt="hamburger icon" />
//               </button>
//               <div className="sideMenuWrap">
//                 {/* close button */}
//                 <button
//                   className="closeButton"
//                   onClick={() => {
//                     document.querySelector(".sideMenuWrap").style.display =
//                       "none";
//                   }}
//                 >
//                   <img src={crossIcon} alt="cross icon" />
//                 </button>
//                 <ul>
//                   <li>
//                     <a href="##">Become a renter</a>
//                   </li>
//                   <li>
//                     <a href="##">Rental deals</a>
//                   </li>
//                   <li>
//                     <a href="##">How it work</a>
//                   </li>
//                   <li>
//                     <a href="##">Why choose us</a>
//                   </li>
//                 </ul>
//                 <div className="hambugerButtons">
//                   <button className="hanburgerSignInBtn">Sign In</button>
//                   <button className="hanburgerSignUpBtn">Sign up</button>
//                 </div>
//               </div>
//             </div>

//             <nav className="navbarOptions">
//               <li>
//                 <a href="##">Become a renter</a>
//               </li>
//               <li>
//                 <a href="##">Rental deals</a>
//               </li>
//               <li>
//                 <a href="##">How it work</a>
//               </li>
//               <li>
//                 <a href="##">Why choose us</a>
//               </li>
//             </nav>
//             <button
//               className="signInBtn"
//               onClick={() => {
//                 //    <Routes>
//                 //      <Route path="/login" element={<Login/>}></Route>
//                 //    </Routes>
//               }}
//             >
//               Sign In
//             </button>
//             <button
//               className="signUpBtn"
//               onClick={() => {
//                 //     <Routes>
//                 //     <Route path="/register" element={<Signup/>}></Route>
//                 //   </Routes>
//               }}
//             >
//               Sign up
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }



import React from "react";
import "../navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import rentcarlogo from "../assets/images/rentcarlogo.webp";
import hamburgerIcon from "../assets/images/hamburger-icon-logo.webp";
import crossIcon from "../assets/images/closeIcon.webp";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
<<<<<<< HEAD
    <header className="carRentalNavbar">
      <div className="container">
        <div className="carRentalNavbarWrapper">
          <a className="rentCarLogo" href="##">
            <img src={rentcarlogo} alt="rent car logo" />
          </a>
          <div className="hamburger">
            <button
              className="hamburgerButton"
              onClick={() => {
                document.querySelector(".sideMenuWrap").style.display = "block";
              }}
            >
              <img src={hamburgerIcon} alt="hamburger icon" />
            </button>
            <div className="sideMenuWrap">
              <button
                className="closeButton"
                onClick={() => {
                  document.querySelector(".sideMenuWrap").style.display = "none";
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
                {isAuthenticated ? (
                  <button className="hanburgerSignInBtn" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <>
                    <button
                      className="hanburgerSignInBtn"
                      onClick={() => navigate('/login')}
                    >
                      Sign In
                    </button>
                    <button
                      className="hanburgerSignUpBtn"
                      onClick={() => navigate('/register')}
                    >
                      Sign up
                    </button>
                  </>
                )}
              </div>
=======
    // Navbar code starts Here.
    <>
      <div className="carRentalNavbarWrapper">
        <a className="rentCarLogo" href="##">
          <img src={rentcarlogo} alt="rent car logo" />
        </a>
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
                document.querySelector(".sideMenuWrap").style.display = "none";
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
>>>>>>> c39e6f44fdaa1ef18547bef7332393b214ad0a7a
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
              <a href="##">Why choose us</a>
            </li>
          </nav>
          
          {isAuthenticated ? (
            <button className="signInBtn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <button className="signInBtn" onClick={() => navigate('/login')}>
                Sign In
              </button>
              <button className="signUpBtn" onClick={() => navigate('/register')}>
                Sign up
              </button>
            </>
          )}
        </div>
<<<<<<< HEAD
      </div>
    </header>
=======

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
            <a href="##">Why choose us</a>
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
>>>>>>> c39e6f44fdaa1ef18547bef7332393b214ad0a7a
  );
}