
import React, { useState } from "react";
import "../signUp/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/images/googleIcon.webp";
import facebookIcon from "../assets/images/facebookIcon.webp";
import appleIcon from "../assets/images/appleIcon.webp";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  // State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Changed to boolean
  const [error, setError] = useState(""); // Error message state
  const [success, setSuccess] = useState(""); // Success message state

  // Handlers
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleSetConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleSetShowPassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(''); // Reset success message

    // Validate Passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });

      console.log("Register response:", res.data);
      setSuccess("User registered successfully!"); // Success feedback
      localStorage.setItem("isAuthenticated", "true"); // Optional: Track authentication

      // Navigate to home page
      navigate("/home");
    } catch (err) {
      console.error("Registration Error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Failed to register. Please try again.");
      }
    } finally {
      // Clear form fields
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="signUpWrapper">
      <h1>Create Account</h1>
      <p className="signUpWrapperPara">
        Create an account so you can explore all the existing jobs
      </p>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <input
          type="email"
          className="inputField"
          placeholder="Email"
          value={email}
          onChange={handleSetEmail}
          required
        />

        {/* Password Input */}
        <input
          type={showPassword ? "text" : "password"}
          className="inputField passField"
          placeholder="Password"
          value={password}
          onChange={handleSetPassword}
          required
        />

        {/* Confirm Password Input */}
        <input
          type={showPassword ? "text" : "password"}
          className="inputField passField confirmPass"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleSetConfirmPassword}
          required
        />

        {/* Show Password Checkbox */}
        <input
          type="checkbox"
          checked={showPassword}
          onChange={handleSetShowPassword}
          id="showPassword"
        />
        <label htmlFor="showPassword" className="showPassLabel">
          Show Password
        </label>

        {/* Display Error or Success Messages */}
        {error && <p className="errorMessage">{error}</p>}
        {success && <p className="successMessage">{success}</p>}

        {/* Submit Button */}
        <button type="submit" className="signUpBtn2">
          Sign Up
        </button>
      </form>

      {/* Redirect to Login */}
      <Link className="newAccountLink" to="/login">
        Already have an account?
      </Link>

      <p className="otherOptions">Or continue with</p>
      <div className="otherOptionsIcons">
        <a href="##">
          <img src={googleIcon} alt="google icon" />
        </a>
        <a href="##">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="##">
          <img src={appleIcon} alt="apple icon" />
        </a>
      </div>
    </div>
  );
};

export default Signup;
