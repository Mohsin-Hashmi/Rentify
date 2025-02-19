import React, { useState } from "react";
import "../login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/images/googleIcon.webp";
import facebookIcon from "../assets/images/facebookIcon.webp";
import appleIcon from "../assets/images/appleIcon.webp";
import handleSubmit from "../hooks/useLogin";
import { useAuth } from "../context/AuthContext";
 // Import useAuth to use the auth context

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); 
  // Toggle Password visibility
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const resetFrom= ()=>{
    // Redirect to home page
    navigate("/home");
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    setLoginError("");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, resetFrom, FormData, { email, password });
    login();
  };
 


  return (
    <>
      <div className="loginWrapper">
        <h1>Login here</h1>
        <p className="loginWrapperPara">Welcome back you’ve been missed!</p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputField"
            placeholder="Email"
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}{" "}
          {/* Email error */}
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputField passField"
            placeholder="Password"
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}{" "}
          {/* Password error */}
          <button type="submit" className="loginSignInBtn">
            Sign in
          </button>
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
        </form>

        <Link className="forgetPassLink">Forgot your password?</Link>
        <Link className="newAccountLink" to="/register">
          Create new account
        </Link>

        <p className="otherOptions">Or continue with</p>
        <div className="otherOptionsIcons">
          <Link to="">
            <img src={googleIcon} alt="google icon" />
          </Link>
          <Link to="">
            <img src={facebookIcon} alt="facebook icon" />
          </Link>
          <Link to="">
            <img src={appleIcon} alt="apple icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
