import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const PublicRoute = () => {
  const { user, isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, redirect them to the home page
  if (isAuthenticated && user) {
    return <Navigate to="/" replace />;
  }

  // Otherwise, allow access to the public route
  return <Outlet />;
};

export default PublicRoute;