import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Header = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full p-2">
      <nav className="flex items-center w-full justify-between">
        <h1 className="text-xl font-medium ">
          <a href="/">Recipify</a>
        </h1>

        <ul className="flex gap-10 uppercase tracking-wider text-xs font-medium text-gray-700">
          <li className="cursor-pointer">
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/my-recipes">My Recipes</a>{" "}
          </li>
          <li>
            <a href="/create-recipes">Create Recipe</a>{" "}
          </li>
        </ul>

        <div className="flex items-center gap-2 relative">
          <div
            className="cursor-pointer flex items-center justify-center p-1 rounded-full hover:bg-gray-100"
            onClick={handleClick}
          >
            <PersonOutlineOutlinedIcon fontSize="" />
          </div>
          <div className="flex items-center justify-center">
            {" "}
            <DarkModeIcon fontSize="" />
          </div>

          {isClicked && (
            <div className="absolute top-10 right-0 bg-white border border-gray-300 shadow-xs rounded-md p-4 w-28 flex flex-col items-start gap-2 text-xs font-medium uppercase tracking-wider text-gray-700">
              <div className="flex items-center gap-1 cursor-pointer">
                <SettingsOutlinedIcon fontSize="" className="text-gray-700" />
                <p>Settings</p>
              </div>
              <div
                className="flex items-center gap-1 text-red-500 cursor-pointer"
                onClick={async () => {
                  await logout();
                  navigate("/login");
                }}
              >
                <LogoutOutlinedIcon fontSize="" className="text-red-500" />
                <p>Logout</p>
              </div>{" "}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
