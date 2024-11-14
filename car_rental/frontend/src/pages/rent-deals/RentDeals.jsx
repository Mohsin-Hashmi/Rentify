import React from "react";
import "./RentDeals.css";
import "../../global/container.css";
import Footer from "../../footer/Footer";
import "../../global/fonts.css";
import Navbar from "../../navbar/Navbar";
import BMW from "../../assets/images/bmw-car.webp";
import Search from "../../search/Search";
// import { Link } from "react-router-dom";
import carOne from "../../assets/images/cardCarOne.webp";
import carTwo from "../../assets/images/cardCarTwo.webp";
import carThree from "../../assets/images/cardCarThree.webp";
import carFour from "../../assets/images/cardCarFour.webp";
import starIcon from "../../assets/images/starIcon.webp";
import userIcon from "../../assets/images/user.webp";
import autoIcon from "../../assets/images/autoIcon.webp";
import airCon from "../../assets/images/airConditionIcon.webp";
import doorsIcon from "../../assets/images/doorsIcon.webp";

const RentDeals = () => {
  return (
    <>
      {/* Header Section */}
      <header className="carRentalNavbar">
        <div className="container">
          <Navbar />
        </div>
      </header>
      {/* Body Section  */}
      <section className="rentDeals">
        <div className="container">
          <div className="rentDealsWrap">
            <img src={BMW} alt="bmw car" />
            <h1>Exclusive Rental Deals.</h1>
            <p className="rentDealsPara">
              Discover the best offers and save big on your next rental.
            </p>
            <Search />
            <div className="rentDealsCars">
              <div className="rentDealsCarsCard">
                <img src={carOne} alt="car one" />
                <h2 className="rentcarName">Jaguar XE L P250</h2>
                <div className="carDealsRating">
                  <img className="starIcon" src={starIcon} alt="star icon" />
                  <h4>4.8</h4>
                  <p>(2.436 reviews)</p>
                </div>
                <div className="carFeaturesWrap">
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={userIcon} alt="user icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>4 Passagers</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={autoIcon} alt="auto icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Auto</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={airCon} alt="air condition icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Air Conditioning</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={doorsIcon} alt="car doors icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>4 Doors</p>
                    </div>
                  </div>
                </div>
                <div className="ourPrice">
                  <h3>Price</h3>
                  <p>
                    $1,800 <span>/day</span>
                  </p>
                </div>
                <p className="discountPara">
                  <span className="spanPara">
                    <span>15% </span>
                  </span>
                  OFF
                </p>
              </div>
              <div className="rentDealsCarsCard">
                <img src={carTwo} alt="car one" />
                <h2 className="rentcarName">Audi R8</h2>
                <div className="carDealsRating">
                  <img className="starIcon" src={starIcon} alt="star icon" />
                  <h4>4.5</h4>
                  <p>(1.936 reviews)</p>
                </div>
                <div className="carFeaturesWrap">
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={userIcon} alt="user icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>2 Passagers</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={autoIcon} alt="auto icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Auto</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={airCon} alt="air condition icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Air Conditioning</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={doorsIcon} alt="car doors icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>2 Doors</p>
                    </div>
                  </div>
                </div>
                <div className="ourPrice">
                  <h3>Price</h3>
                  <p>
                    $1,800 <span>/day</span>
                  </p>
                </div>
                <p className="discountPara">
                  <span className="spanPara">
                    <span>15% </span>
                  </span>
                  OFF
                </p>
              </div>
              <div className="rentDealsCarsCard">
                <img src={carThree} alt="car one" />
                <h2 className="rentcarName">Audi R8</h2>
                <div className="carDealsRating">
                  <img className="starIcon" src={starIcon} alt="star icon" />
                  <h4>4.5</h4>
                  <p>(2.036 reviews)</p>
                </div>
                <div className="carFeaturesWrap">
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={userIcon} alt="user icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>4 Passagers</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={autoIcon} alt="auto icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Auto</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={airCon} alt="air condition icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Air Conditioning</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={doorsIcon} alt="car doors icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>4 Doors</p>
                    </div>
                  </div>
                </div>
                <div className="ourPrice">
                  <h3>Price</h3>
                  <p>
                    $1,800 <span>/day</span>
                  </p>
                </div>
              </div>
              <div className="rentDealsCarsCard">
                <img src={carFour} alt="car one" />
                <h2 className="rentcarName">Audi R8</h2>
                <div className="carDealsRating">
                  <img className="starIcon" src={starIcon} alt="star icon" />
                  <h4>4.3</h4>
                  <p>(2.236 reviews)</p>
                </div>
                <div className="carFeaturesWrap">
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={userIcon} alt="user icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>2 Passagers</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={autoIcon} alt="auto icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Auto</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={airCon} alt="air condition icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>Air Conditioning</p>
                    </div>
                  </div>
                  <div className="carFeatures">
                    <div className="carFeatureIcon">
                      <img src={doorsIcon} alt="car doors icon" />
                    </div>
                    <div className="carFeatreContent">
                      <p>2 Doors</p>
                    </div>
                  </div>
                </div>
                <div className="ourPrice">
                  <h3>Price</h3>
                  <p>
                    $1,800 <span>/day</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="carRentalFooter">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default RentDeals;
