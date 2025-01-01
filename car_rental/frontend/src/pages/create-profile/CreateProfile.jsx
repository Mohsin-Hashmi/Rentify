import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import "../../global/container.css";
import "../../global/fonts.css";
import "./CreateProfile.css";
import { BASE_URL } from "../../utils/constants";
const CreateProfile = () => {

  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]=useState("");
  const [profileImage, setProfileImage]= useState("");
  const [about, setAbout]= useState("");
  const [success, setSuccess]= useState("")

  const handleSubmit= async (e)=>{
    e.preventDefault();

    const formData= new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("profileImage", profileImage);
    formData.append("about", about);
    const response= await fetch(`${BASE_URL}/profile/create`,{
      method: "POST",
      body:formData,
      credentials: "include"
    })
    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || "failed to update the profile");
    }
    const responseData= await response.json();
    setSuccess(responseData.message);
    localStorage.setItem("token", responseData.token);
    setFirstName("");
    setLastName("");
    setProfileImage(null);
    setAbout("");
  }
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <section className="createProfileSection">
        <div className="container">
          <div className="createProfileWrap">
            <h1 className="createProfileHeading">Create Your Profile</h1>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="firstName">First Name</label>
                <input className="profileinputField" id="firstName" type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter Your First Name" required/>
                
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="lastName">Last Name</label>
                <input className="profileinputField" id="lastName" type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="Enter Your Last Name" required/>
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="profileImage">Profile Image</label>
                <input className="profileinputField" id="profileImage"type="file" onChange={(e)=>setProfileImage(e.target.value)} placeholder="Insert Your Profile Image" required/>
              </div>
              <div className="formGroup">
                <label className="profileLabel" htmlFor="about">About</label>
                <textarea className="profileinputField textarea" id="about" onChange={(e)=> setAbout(e.target.value)}  placeholder="Enter Your Bio" required/>
              </div>
              <button type="submit" className="profileSubmitBtn">
                Save Profile
              </button>
            </form>
            {success && <p>{success}</p>}
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

export default CreateProfile;
