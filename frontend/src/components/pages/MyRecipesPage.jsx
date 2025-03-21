import React from "react";

import Header from "../Header";

import RecipeWidget from "../widgets/RecipeWidget";

import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const MyRecipesPage = () => {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr]">
      <header className="w-full border-b border-gray-300">
        <Header />
      </header>
      <main className="bg-gray-50 p-4 flex flex-col gap-1">
        

        <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-700 uppercase tracking-wider">
          My Recipes
        </p>
          {/* Search Bar */}

          <div className="w-1/3 border border-gray-300 text-sm font-light p-2 shadow-xs rounded-md   flex items-center">
            <input
              placeholder="Search here..."
              className="flex-1 outline-none w-50 text-xs"
            />
            <SearchIcon fontSize="" className="text-gray-500" />
          </div>

          {/* Button Container */}
          <div className="flex items-center gap-2 ">
            {" "}
            <div className="flex items-center gap-1 text-sm font-mediuum border border-gray-300 shadow-xs rounded-md p-2 text-gray-700 cursor-pointer">
              <FilterListIcon fontSize="" />
              Filter
            </div>
            <div className="flex items-center gap-1 text-sm font-medium border-yellow-600 shadow-xs rounded-md p-2 bg-yellow-600 text-white cursor-pointer">
              <AddIcon fontSize="" />
              <a href="/create-recipes">Add</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
        
          <div className="flex flex-col-4 gap-2 ">
            <RecipeWidget />
            <RecipeWidget />
            <RecipeWidget />
            <RecipeWidget />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <h1 className="font-medium text-xs tracking-wider text-gray-700 uppercase">
            Saved Recipes{" "}
          </h1>
          <div className="flex flex-col-4 gap-2 ">
            <RecipeWidget />
            <RecipeWidget />
            <RecipeWidget />
            <RecipeWidget />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyRecipesPage;
