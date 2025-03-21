import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import RecipeWidget from "../widgets/RecipeWidget";
import FilterListIcon from "@mui/icons-material/FilterList";


const SearchResultPage = () => {
  return (
    <div className="w-full h-screen bg-white grid grid-rows-[auto_1fr]">
      <header className="p-2">
        <h1 className="text-xl font-medium">
          <a href="/">Recipfiy</a>
        </h1>
      </header>
      <main className="flex flex-col gap-2 bg-gray-50 p-4">
        <div className="flex gap-1 items-center">
          <ArrowBackIosIcon fontSize="" className="text-gray-700" />
          <p className="tracking-wider text-xs uppercase font-medium text-gray-700">
            <a href="/">Search again</a>
          </p>
        </div>
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="text-xl my-2 font-medium">
            Showing results for Pesto
          </h1>
          <div className="flex items-center gap-1 text-sm font-mediuum border border-gray-300 shadow-xs rounded-md p-2 text-gray-700 cursor-pointer">
            <FilterListIcon fontSize="" />
            Filter
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />

          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />

          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
        </div>
      </main>
    </div>
  );
};

export default SearchResultPage;
