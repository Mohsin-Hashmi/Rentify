
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home.jsx";
import WellcomeScreen from "./wellcomeScreen/WellcomeScreen.jsx";
import Login from "./login/Login.jsx";
import Signup from "./signUp/Signup.jsx";

export default function App() {
  
  return (
    <Router>  {/* Make Router the outermost wrapper */}
      <AuthProvider>  {/* AuthProvider is inside Router */}
        <Routes>
          <Route path="/" element={<WellcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
