import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LabelWidget from "../widgets/recipe-page/LabelWidget";
import IngredientsWidget from "../widgets/recipe-page/IngredientsWidget";
import NutritionalInfoWidget from "../widgets/recipe-page/NutritionalInfoWidget";
import InstructionWidget from "../widgets/recipe-page/InstructionWidget";
import RecipeWidget from "../widgets/RecipeWidget";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import axios from "axios";

const RecipePage = () => {
  const { id } = useParams(); // Extract id from route parameters
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRecipeData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/recipe/getRecipeDetails/${id}`
      );
      setRecipeData(response.data); // Set the fetched recipe data
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching recipe data:", error);
      setError("Failed to load recipe details. Please try again later.");
    }
  };

  useEffect(() => {
    if (id) {
      fetchRecipeData();
    }
  }, [id]);

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!recipeData) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

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
            labelDescription={"Mexican Food"} // Replace with dynamic data if available
          />
          <LabelWidget
            labelTitle={"Servings"}
            labelDescription={`${recipeData.servings} People`}
          />
          <LabelWidget
            labelTitle={"Prep Time"}
            labelDescription={`${recipeData.preparationMinutes} Minutes`}
          />
          <LabelWidget
            labelTitle={"Cook Time"}
            labelDescription={`${recipeData.cookingMinutes} Minutes`}
          />
          <LabelWidget
            labelTitle={"Difficulty"}
            labelDescription={"Intermediate Level"} // Replace with dynamic data if available
          />
        </div>

        {/* Description */}
        <div className="p-5 text-sm text-gray-700 flex flex-col gap-2">
          <p dangerouslySetInnerHTML={{ __html: recipeData.summary }}></p>

          <p className="font-medium">Tags:</p>
          <p className="text-yellow-600 font-medium">
            {recipeData.dishTypes?.join(", ")}{" "}
            {/* Display dish types as tags */}
          </p>
        </div>

        {/* Ingredients and Nutritional Info */}
        <div className="grid grid-cols-[80%_auto] gap-4">
          <IngredientsWidget ingredients={recipeData.extendedIngredients} />
          <NutritionalInfoWidget />
        </div>

        {/* Cooking Instructions */}
        <div className="flex flex-col gap-2">
          <h1 className="font-medium text-2xl">Cooking Instructions</h1>
          <InstructionWidget instructions={recipeData.instructions} />
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
