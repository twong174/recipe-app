import React, { useState, useEffect } from "react";
import Header from "../Header";
import TestImage from "../../assets/d.png";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleRecipeSearch = async () => {
   if (searchTerm.trim()) { 
    navigate(`/search?query=${searchTerm}`)
   }
  };

  return (
    <div className="w-full h-screen overflow-hidden grid grid-rows-[auto_1fr]">
      <header className="border-b border-gray-300">
        <Header />
      </header>
      <main className="bg-gray-50 overflow-hidden">
        <div className="h-full grid grid-cols-[60%_auto]">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-medium">Hungry but stuck?</h1>
            <p className="text-sm font-medium tracking-wider uppercase text-gray-700">
              Enter an ingredient below
            </p>
            <div className="border border-gray-300 text-sm font-light p-2 shadow-xs rounded-md mt-4 flex items-center">
              <input
                placeholder="Search here..."
                className="flex-1 outline-none w-50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon
                fontSize=""
                className="text-gray-500"
                onClick={handleRecipeSearch}
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <img src={TestImage} className="object-contain w-full h-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
