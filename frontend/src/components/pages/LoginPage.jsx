import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full h-screen grid grid-cols-[60%_auto]">
      <div className=" flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-medium text-6xl">Recipify</h1>
          <p className="text-gray-700"> Your all in one recipe app</p>
        </div>
      </div>
      <div className="flex flex-col p-5 items-center justify-center">
        <h1 className="text-2xl font-medium">Welcome Back</h1>

        <div className="flex flex-col gap-2 p-5 items-start w-full">
          <p className="text-xs font-medium">Username</p>
          <input
            type="text"
            placeholder="johndoe123"
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />
          <p className="text-xs font-medium">Password</p>
          <input
            type="text"
            placeholder="Password123"
            className="border border-gray-300 shadow-xs text-sm p-2 bg-white rounded-md w-full outline-none"
          />
          <button className="rounded-md cursor-pointer bg-gray-700 text-white w-full text-sm p-2 font-light mt-4">
            Login
          </button>
        </div>

        <p className="text-xs text-gray-700">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-400">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
