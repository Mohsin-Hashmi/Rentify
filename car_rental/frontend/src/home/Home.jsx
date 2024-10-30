
import "../home/Home.css";
import "../global/container.css"
import "../global/fonts.css"
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import bannerLogo from "../assets/images/blueCar.webp";
import googlePlayIcon from "../assets/images/googlePlayIcon.webp";
import appleIcon from "../assets/images/apple-Icon.webp";
import locationIcon from "../assets/images/location.webp";
import calendarIcon from "../assets/images/calendar.webp";
import chooseLocation from "../assets/images/choose_location_icon.webp";
import pickDate from "../assets/images/date_icon.webp";
import bookCar from "../assets/images/book_car_icon.webp";
import jaguarIcon from "../assets/images/JaguarIcon.webp";
import nissanIcon from "../assets/images/nissanIcon.webp";
import volvoIcon from "../assets/images/volgoIcon.webp";
import ringIcon from "../assets/images/ringsIcon.webp";
import audiCar from "../assets/images/supportCar.webp";
import priceIcon from "../assets/images/priceGuaranteedIcon.webp";
import expDriver from "../assets/images/experienceDriverIcon.webp";
import carDelivery from "../assets/images/carDeliveryIcon.webp";
import techSupport from "../assets/images/technicalSupportIcon.webp";
import carOne from "../assets/images/cardCarOne.webp";
import carTwo from "../assets/images/cardCarTwo.webp";
import carThree from "../assets/images/cardCarThree.webp";
import carFour from "../assets/images/cardCarFour.webp";
import starIcon from "../assets/images/starIcon.webp";
import userIcon from "../assets/images/user.webp";
import autoIcon from "../assets/images/autoIcon.webp";
import airCon from "../assets/images/airConditionIcon.webp";
import doorsIcon from "../assets/images/doorsIcon.webp";
import Modal from "../modal/CarRentalApp.jsx";
import ShowCarsModal from "../showCarsModal/ShowCarsModal.jsx";
import Footer from "../footer/Footer.jsx";
import SwiperCom from "../swiperCom/SwiperCom.jsx";
const Home = () => {
  
  const RentalDeals = () => {
    window.scrollTo(0, 0);
  }
  
  return (
    <>
      {/* Header Section */}
      <header className="carRentalNavbar">
        <div className="container">
          <Navbar/>
        </div>
      </header>
      {/* Banner section */}
      <section className="rentcarBanner">
        <div className="container">
          <div className="rentcarBannerWrapper">
            <div className="rentcarBannerWrapperContent">
              <h1>
                Find, book and rent a car <span>Easily</span>
              </h1>
              <p className="bannerPara">
                Get a car wherever and whenever you need it with your IOS and
                Android device.
              </p>
              <div className="mobileApplicationLinks">
                <a href="##">
                  <div className="googlePlayLink">
                    <div className="googlePlayIcon">
                      <img src={googlePlayIcon} alt="google play icon" />
                    </div>
                    <div className="googlePlayContent">
                      <p>GET IT ON</p>
                      <h3>Google Play</h3>
                    </div>
                  </div>
                </a>
                <a href="##">
                  <div className="appStoreLink">
                    <div className="googlePlayLink">
                      <div className="googlePlayIcon">
                        <img src={appleIcon} alt="google play icon" />
                      </div>
                      <div className="googlePlayContent">
                        <p>Download on the</p>
                        <h3>App Store</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="rentcarBannerWrapperImage">
              <img className="bannerImg" src={bannerLogo} alt="banner logo" />
            </div>
          </div>
        </div>
      </section>
      {/* Search Section */}
      <section className="searchCar">
        <div className="container">
          <div className="searchCarWrapper">
            <div className="searchCarWrapperCard">
              <div className="cardIcon">
                <img src={locationIcon} alt="location icon" />
              </div>
              <div className="cardContent">
                <h5>Location</h5>
                <p>Search your location</p>
              </div>
            </div>
            <div className="searchCarWrapperCard">
              <div className="cardSeperator">|</div>
              <div className="cardIcon">
                <img src={calendarIcon} alt="calendar icon" />
              </div>
              <div className="cardContent">
                <h5>Pickup date</h5>
                <p>Tue 15 Feb, 09:00</p>
              </div>
            </div>
            <div className="searchCarWrapperCard">
              <div className="cardSeperator">|</div>
              <div className="cardIcon">
                <img src={calendarIcon} alt="calendar icon" />
              </div>
              <div className="cardContent">
                <h5>Return date</h5>
                <p>Thu 16 Feb, 11:00</p>
              </div>
            </div>
            {/* Search Button */}
            <Modal />
          </div>
        </div>
      </section>
      <section className="wrokProcess">
        <div className="container">
          <div className="wrokProcessWrap">
            <div className="wrokProcessWrapPara">
              <p>HOW IT WORK</p>
            </div>
            <h2 className="workProcessHeading">
              Rent with following Three working steps
            </h2>
            {/* Process Steps */}
            <div className="wrokProcessBox">
              <div className="boxCard">
                <img src={chooseLocation} alt="choose location icon" />
                <h4>Choose location</h4>
                <p>Choose your and find your best car.</p>
              </div>
              <div className="boxCard">
                <img src={pickDate} alt="pick date icon" />
                <h4>Pick-up date</h4>
                <p>Select your pick up date and time to book your car.</p>
              </div>
              <div className="boxCard">
                <img src={bookCar} alt="book car icon" />
                <h4>Book your car</h4>
                <p>Book your car and we will deliver it directly to you.</p>
              </div>
            </div>
            {/* Car Brands */}
            <div className="carBrands">
              <div className="carBrandsContent">
                <img src={jaguarIcon} alt="jaguar icon" />
                <img src={nissanIcon} alt="nissan icon" />
                <img src={volvoIcon} alt="volvo icon" />
                <img src={ringIcon} alt="ring icon" />
                {/* dublicating the images */}
                <img src={jaguarIcon} alt="jaguar icon" />
                <img src={nissanIcon} alt="nissan icon" />
                <img src={volvoIcon} alt="volvo icon" />
                <img src={ringIcon} alt="ring icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why choose us */}
      <section className="ourFeatures">
        <div className="container">
          <div className="ourFeaturesWrap">
            <div className="audiCarImage">
              <img src={audiCar} alt="audi car" />
            </div>
            <div className="ourOffers">
              <div className="ourOffersTitle">
                <p>WHY CHOOSE US</p>
              </div>
              <h2 className="ourOffersHeading">
                We offer the best experience with our rental deals
              </h2>
              <div className="ourOffersContent">
                <div className="contentCard">
                  <div className="contentCardImage">
                    <img src={priceIcon} alt="price icon" />
                  </div>
                  <div className="contentCardParas">
                    <h3>Best price guaranteed</h3>
                    <p>
                      Find a lower price? We’ll refund you 100% of the
                      difference.
                    </p>
                  </div>
                </div>
                <div className="contentCard">
                  <div className="contentCardImage">
                    <img src={expDriver} alt="experience driver icon" />
                  </div>
                  <div className="contentCardParas">
                    <h3>Experience driver</h3>
                    <p>
                      Don’t have driver? Don’t worry, we have many experienced
                      driver for you.
                    </p>
                  </div>
                </div>
                <div className="contentCard">
                  <div className="contentCardImage">
                    <img src={carDelivery} alt="car delivery icon" />
                  </div>
                  <div className="contentCardParas">
                    <h3>24 hour car delivery</h3>
                    <p>
                      Book your car anytime and we will deliver it directly to
                      you.
                    </p>
                  </div>
                </div>
                <div className="contentCard">
                  <div className="contentCardImage">
                    <img src={techSupport} alt="tech support icon" />
                  </div>
                  <div className="contentCardParas">
                    <h3>24 hour car delivery</h3>
                    <p>
                      Book your car anytime and we will deliver it directly to
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular car rental Deals */}
      <section className="popularDeals">
        <div className="container">
          <div className="popularDealsWrap">
            <div className="popularDealsBox">
              <p>POPULAR RENTAL DEALS</p>
            </div>
            <h2 className="popularDealsHeading">
              Most popular cars rental deals
            </h2>
            <div className="popularDealsWrapper">
              <div className="popularDealsCard">
                <img className="carImages" src={carOne} alt="car one " />
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
                    $1,800 <span>/day</span>
                  </p>
                </div>
                <Link to="/rent-car" className="rentNowBtn" onClick={RentalDeals} >
                  Rent Now
                </Link>
              </div>
              <div className="popularDealsCard">
                <img className="carImages" src={carTwo} alt="car two " />
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
                    $2,100 <span>/day</span>
                  </p>
                </div>
                <Link to="/rent-car" className="rentNowBtn" onClick={RentalDeals}>
                  Rent Now
                </Link>
              </div>
              <div className="popularDealsCard">
                <img className="carImages" src={carThree} alt="car three " />
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
                    $1,600 <span>/day</span>
                  </p>
                </div>
                <Link to="/rent-car" className="rentNowBtn" onClick={RentalDeals}>
                  Rent Now
                </Link>
              </div>
              <div className="popularDealsCard">
                <img className="carImages" src={carFour} alt="car four " />
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
                    $2,300 <span>/day</span>
                  </p>
                </div>
                <Link to="/rent-car" className="rentNowBtn" onClick={RentalDeals}>
                  Rent Now
                </Link>
              </div>
            </div>
            {/* see all vehicles btn */}
            <ShowCarsModal />
          </div>
        </div>
      </section>
      {/* Swiper Component */}
      <section className="userReviews">
        <div className="container">
          <div className="userReviewsWrap">
            <div className="userReviewsPara">
              <p>TESTIMONIALS</p>
            </div>

            <h2>What peole say about us?</h2>
          </div>
          <div className="swiperWrap">
            <SwiperCom />
          </div>
        </div>
      </section>

      {/* Footer Declaration */}
      <footer className="carRentalFooter">
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Home;
