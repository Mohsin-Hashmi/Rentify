import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the useAuth hook

// ProtectedRoute component to protect certain routes
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component if authenticated
};