
import React, { useState } from "react";
import "../login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/images/googleIcon.webp";
import facebookIcon from "../assets/images/facebookIcon.webp";
import appleIcon from "../assets/images/appleIcon.webp";
import { useAuth } from "../context/AuthContext"; // Import useAuth to use the auth context

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [loginError, setLoginError] = useState(""); 
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Initialize navigate

  // Toggle Password visibility
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 2) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make the API call
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Login failed");
        }

        const data = await response.json();
        console.log("login Successfully!!!")
        setSuccess("User login successful!");

        // Store token if required
        localStorage.setItem("token", data.token);

        // Clear form fields and errors
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
        setLoginError("");

        // Redirect to home page
        navigate("/home");
      } catch (err) {
        console.error("Login Failed", err);
        setLoginError(err.message || "Failed to login. Please try again.");
      }
    }
  };

  return (
    <div className="loginWrapper">
      <h1>Login here</h1>
      <p className="loginWrapperPara">Welcome back you’ve been missed!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inputField"
          placeholder="Email"
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>} {/* Email error */}

        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputField passField"
          placeholder="Password"
        />
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>} {/* Password error */}

        <button type="submit" className="loginSignInBtn">Sign in</button>

        <input
          type="checkbox"
          id="show-password"
          checked={showPassword}
          onChange={handleShowPassword}
        />
        <label htmlFor="show-password" className="labelShowPass">
          Show Password
        </label>

        {loginError && <p style={{ color: "red" }}>{loginError}</p>} 
        {success && <p className="successMessage">{success}</p>} Success message
      </form>

      <Link className="forgetPassLink" >Forgot your password?</Link>
      <Link className="newAccountLink" to="/register">
        Create new account
      </Link>

      <p className="otherOptions">Or continue with</p>
      <div className="otherOptionsIcons">
        <Link to='' >
          <img src={googleIcon} alt="google icon" />
        </Link>
        <Link to=''>
          <img src={facebookIcon} alt="facebook icon" />
        </Link>
        <Link to=''>
          <img src={appleIcon} alt="apple icon" />
        </Link>
      </div>
    </div>
  );
};

export default Login;
