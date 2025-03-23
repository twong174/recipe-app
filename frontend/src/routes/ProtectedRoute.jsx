import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect them to the login page
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to the protected route
  return <Outlet />;
};

export default ProtectedRoute;