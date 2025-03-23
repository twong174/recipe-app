import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:3000/api/auth/authStatus",
        {
          withCredentials: true,
        }
      );

      if (response.data.authenticated) {
        setUser(response.data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.authenticated === false) {
        setUser(null);
        setIsAuthenticated(false);
        alert("Logged out successfully!");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.data.authenticated) {
        setUser(response.data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
        return { message: "Error logging in. Try again" };
      }
    } catch (error) {
      console.log(error);
      return {
        message: "Server error. Try again later.",
      };
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, checkAuth, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
