import React from 'react';
import '../wellcomeScreen/WellcomeScreen.css';
import { useNavigate } from 'react-router-dom';
import wellcomeImage from '../assets/images/welcome-Image.webp';
const WellcomeScreen = () => {
  const navigate = useNavigate();
  return (

    <>
      <div className='wellcomeScreenWrapper'>
        <img src={wellcomeImage} alt="wellcome icon" />
        <div className='wellcomeScreenWrapperContent'>
          <h1>Discover Your Dream Car here</h1>
          <p>Explore all the existing job roles based on your interest and study major</p>
        </div>
        <div className='buttons'>
          <button className='loginInBtn' onClick={() => {
            navigate("/login")
          }}>Login</button>
          <button className='registerBtn' onClick={() => {
            navigate("/register")
          }}>Register</button>
        </div>
      </div>
    </>
  )
}

export default WellcomeScreen;