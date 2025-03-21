import React, { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LabelWidget from "../widgets/recipe-page/LabelWidget";
import IngredientsWidget from "../widgets/recipe-page/IngredientsWidget";
import NutritionalInfoWidget from "../widgets/recipe-page/NutritionalInfoWidget";
import InstructionWidget from "../widgets/recipe-page/InstructionWidget";
import RecipeWidget from "../widgets/RecipeWidget";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";

import Test from "../../assets/d.png";

import axios from "axios";

const RecipePage = () => {
  const [recipeData, setRecipeData] = useState([]);

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/recipe/getRecipe"
      );

      setRecipeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecipeData();
  }, []);

  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr]">
      <header className="p-2 bg-white border-b border-gray-300">
        <h1 className="text-xl font-medium">
          <a href="/">Recipfy</a>
        </h1>
      </header>
      <main className="bg-gray-50 p-5 flex flex-col gap-2">
        <p className="flex items-center text-xs tracking-wider uppercase text-gray-700 font-medium cursor-pointer mb-2">
          <ArrowBackIosIcon fontSize="" />
          <a href="/"> Search again</a>
        </p>

        {/* White Rounded Container */}
        <div className="p-10 bg-white rounded-md relative">
          {/* Save Icon Container */}
          <div className="absolute top-4 right-4 bg-gray-700 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <SaveAltOutlinedIcon fontSize="" className="text-white" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 p-4">
            <p className="text-sm text-gray-700">Let's Cook</p>
            <p className="text-5xl font-medium w-1/2">{recipeData.title}</p>
          </div>
        </div>

        {/* Label Widgets */}
        <div className="flex justify-between items-center">
          <LabelWidget
            labelTitle={"Cuisine"}
            labelDescription={"Mexican Food"}
          />
          <LabelWidget labelTitle={"Servings"} labelDescription={`${recipeData.servings} People`} />
          <LabelWidget
            labelTitle={"Prep Time"}
            labelDescription={`${recipeData.preparationMinutes} Minutes`}
          />
          <LabelWidget
            labelTitle={"Cook Tine"}
            labelDescription={`${recipeData.cookingMinutes} Minutes`}
          />
          <LabelWidget
            labelTitle={"Difficulty"}
            labelDescription={"Intermediate Level"}
          />
        </div>

        {/* Description */}
        <div className="p-5 text-sm text-gray-700 flex flex-col gap-2">
          <p>{recipeData.summary}</p>

          <p className="font-medium">Tags:</p>
          <p className="text-yellow-600 font-medium">
            #Mexican, #Spicy, #Tacos, #Dinner
          </p>
        </div>

        {/* Ingredients and Nutritional Info */}
        <div className="grid grid-cols-[80%_auto] gap-4">
          <IngredientsWidget />
          <NutritionalInfoWidget />
        </div>

        {/* Cooking Instructions */}
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-2xl">Cooking Instructions</h1>
          <InstructionWidget />
          <InstructionWidget />
          <InstructionWidget />
          <InstructionWidget />
          <InstructionWidget />
        </div>

        {/* Divider */}
        <div className="border-b border-gray-300 mt-5 my-2"></div>

        {/* Related Recipes */}
        <h1 className="text-2xl font-medium">Related Recipes</h1>
        <div className="grid grid-cols-4 gap-2">
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
          <RecipeWidget />
        </div>
      </main>
    </div>
  );
};

export default RecipePage;
