import React, { useState, useEffect } from "react";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import PublishIcon from "@mui/icons-material/Publish";

import RecipeGenInfoWidget from "../widgets/RecipeGenInfoWidget";
import RecipeDetailWidget from "../widgets/RecipeDetailWidget";
import RecipeDirectionsWidget from "../widgets/RecipeDirectionsWidget";

const CreateRecipesPage = () => {

  const [recipeName, setRecipeName] = useState("");
  const [servingCount, setServingCount] = useState(0);
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr]">
      <header className="w-full p-2 border-b border-gray-300 flex items-center justify-between">
        <h1 className="text-xl font-medium">
          <a href="/">Recipify</a>
        </h1>
        <div className="flex gap-1 items-center">
          <div className="flex gap-1 items-center border border-gray-300 shadow-xs cursor-pointer rounded-md p-1 font-medium text-xs">
            <SaveAltIcon fontSize="" />
            Save Draft
          </div>
          <div className="flex gap-1 items-center border rounded-md p-1 text-xs cursor-pointer text-white bg-yellow-600 font-medium">
            <PublishIcon fontSize="" />
            Publish Recipe
          </div>
        </div>
      </header>
      <main className="w-full h-full bg-gray-50 grid grid-cols-[40%_auto] grid-rows-2 gap-4 p-4">
        <div className="row-span-2 flex flex-col gap-2">
          <h1 className="tracking-wider text-xs font-medium text-gray-700">
            RECIPE GENERAL INFORMATION
          </h1>
          <RecipeGenInfoWidget />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="tracking-wider text-xs font-medium text-gray-700">
            RECIPE DETAIL
          </h1>
          <RecipeDetailWidget />
        </div>

        <div className="">
          <RecipeDirectionsWidget />
        </div>
      </main>
    </div>
  );
};

export default CreateRecipesPage;
