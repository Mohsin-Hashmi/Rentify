import React from "react";
import { Link } from "react-router-dom";
import "../showAllCars/ShowAllCars.css";
import { useEffect } from "react";
import carOne from "../assets/images/cardCarOne.webp";
import carTwo from "../assets/images/cardCarTwo.webp";
import carThree from "../assets/images/cardCarThree.webp";
import carFour from "../assets/images/cardCarFour.webp";
import starIcon from "../assets/images/starIcon.webp";
import userIcon from "../assets/images/user.webp";
import autoIcon from "../assets/images/autoIcon.webp";
import airCon from "../assets/images/airConditionIcon.webp";
import doorsIcon from "../assets/images/doorsIcon.webp";
export default function  ShowAllCars() {
  
  const RentalDeals = () => {
    window.scrollTo(0, 0);
  }
  


  return (
    
    <>
      <div className="modalCarsWrapper">
        {/* first car */}
        <div className="modalCarsWrapperCards">
          <img src={carOne} alt="car one" />
          <h2 className="carName">Jaguar XE L P250</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
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
              RS:1,800 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn" onClick={RentalDeals}>
            Rent Now
          </Link>
        </div>
        {/* second car */}
        <div className="modalCarsWrapperCards">
          <img src={carTwo} alt="car one" />
          <h2 className="carName Cars">Audi R8</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
            <h4>4.6</h4>
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
              RS:2,100 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn"  onClick={RentalDeals} >
            Rent Now
          </Link>
        </div>
        {/* Third car */}
        <div className="modalCarsWrapperCards">
          <img src={carThree} alt="car one" />
          <h2 className="carName">BMW M3</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
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
              RS:1,600 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn"  onClick={RentalDeals}>
            Rent Now
          </Link>
        </div>
        {/* Four car */}
        <div className="modalCarsWrapperCards">
          <img src={carFour} alt="car Four" />
          <h2 className="carName Cars">Lamborghini Huracan</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
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
              RS:2,300 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn"  onClick={RentalDeals}>
            Rent Now
          </Link>
        </div>
        {/* fifth car */}
        <div className="modalCarsWrapperCards">
          <img src={carOne} alt="car one" />
          <h2 className="carName">Jaguar XE L P250</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
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
              RS:1,800 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn"  onClick={RentalDeals}>
            Rent Now
          </Link>
        </div>
        {/* sixth car */}
        <div className="modalCarsWrapperCards">
          <img src={carTwo} alt="car one" />
          <h2 className="carName Cars">Audi R8</h2>
          <div className="carRating">
            <img src={starIcon} alt="star icon" />
            <h4>4.6</h4>
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
              RS:2,100 <span>/day</span>
            </p>
          </div>
          <Link to="/rent-car" className="rentNowBtn"  onClick={RentalDeals}>
            Rent Now
          </Link>
        </div>
      </div>
    </>
  );
};

