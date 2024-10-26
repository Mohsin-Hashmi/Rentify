
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home.jsx";
import WellcomeScreen from "./wellcomeScreen/WellcomeScreen.jsx";
import Login from "./login/Login.jsx";
import Signup from "./signUp/Signup.jsx";
import { AuthProvider } from "./context/AuthContext.js";
import ChooseUS from "../../frontend/src/pages/why-choose-us/ChooseUS.jsx"
import WorkProcess from "../../frontend/src/pages/workProcess/WorkProcess.jsx"
import CarRenter from "./pages/become-renter/CarRenter.jsx";
export default function App() {
  
  return (
    <Router>  {/* Make Router the outermost wrapper */}
      <AuthProvider>  {/* AuthProvider is inside Router */}
        <Routes>
          <Route path="/" element={<WellcomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chooseus" element={<ChooseUS/>} />
          <Route path="/workprocess" element={<WorkProcess/>}/>
          <Route path="/rent-car" element={<CarRenter/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
