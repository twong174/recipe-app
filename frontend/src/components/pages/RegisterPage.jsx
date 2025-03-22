import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Send a POST request to the backend
      const response = await axios.post("http://localhost:3000/api/user/registerUser", {
        firstName,
        lastName,
        username,
        emailAddress,
        password,
      });

      // If registration is successful, redirect to the login page
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="w-full h-screen grid grid-cols-[60%_auto]">
      <div className="flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-medium text-6xl">Recipify</h1>
          <p className="text-gray-700">Your all-in-one recipe app</p>
        </div>
      </div>
      <div className="flex flex-col p-5 items-center justify-center">
        <h1 className="text-2xl font-medium">Create Account</h1>

        <div className="flex flex-col gap-2 p-5 items-start w-full">
          {/* First Name */}
          <p className="text-xs font-medium">First Name</p>
          <input
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Last Name */}
          <p className="text-xs font-medium">Last Name</p>
          <input
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Username */}
          <p className="text-xs font-medium">Username</p>
          <input
            type="text"
            placeholder="johndoe123"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Email Address */}
          <p className="text-xs font-medium">Email Address</p>
          <input
            type="email"
            placeholder="johndoe@email.com"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Password */}
          <p className="text-xs font-medium">Password</p>
          <input
            type="password"
            placeholder="Password123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Confirm Password */}
          <p className="text-xs font-medium">Confirm Password</p>
          <input
            type="password"
            placeholder="Password123"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />

          {/* Error Message */}
          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Register Button */}
          <button
            onClick={registerUser}
            className="rounded-md cursor-pointer bg-gray-700 text-white w-full text-sm p-2 font-light mt-4"
          >
            Register
          </button>
        </div>

        <p className="text-xs text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;