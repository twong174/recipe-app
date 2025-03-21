import React from "react";

import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = () => {
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

        <div className="flex items-center gap-1">
          <PersonIcon fontSize="" />
          <DarkModeIcon fontSize="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
