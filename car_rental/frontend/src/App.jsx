import React from "react";
import './darkMode/DarkMode.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home.jsx";
import WellcomeScreen from "./wellcomeScreen/WellcomeScreen.jsx";
import Login from "./login/Login.jsx";
import Signup from "./signUp/Signup.jsx";
import { AuthProvider } from "./context/AuthContext.js";
import ChooseUS from "../../frontend/src/pages/why-choose-us/ChooseUS.jsx";
import WorkProcess from "../../frontend/src/pages/workProcess/WorkProcess.jsx";
import CarRenter from "./pages/become-renter/CarRenter.jsx";
import RentDeals from "./pages/rent-deals/RentDeals.jsx";
import ProtectedRoute from "./context/ProtectedRoute.js";

export default function App() {
  return (
    <>
      <Router>
        {/* Make Router the outermost wrapper */}
        <AuthProvider>
          {/* AuthProvider is inside Router */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<WellcomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />

            {/* Protected Routes */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chooseus"
              element={
                <ProtectedRoute>
                  <ChooseUS />
                </ProtectedRoute>
              }
            />
            <Route
              path="/workprocess"
              element={
                <ProtectedRoute>
                  <WorkProcess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rent-car"
              element={
                <ProtectedRoute>
                  <CarRenter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rent-deals"
              element={
                <ProtectedRoute>
                  <RentDeals />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
