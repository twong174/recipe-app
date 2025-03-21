import React from "react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

import IngredientWidget from "./IngredientWidget";

import AddIcon from "@mui/icons-material/Add";

const RecipeDetailWidget = () => {
  return (
    <div className="bg-white shadow-xs h-full p-4 rounded-md flex flex-col gap-2">
      <p className="text-xs font-medium flex items-center gap-1">
        Ingredients
        <ErrorOutlineOutlinedIcon fontSize="" />
      </p>

      <div className="flex flex-col flex-1 gap-2">
        {" "}
        <IngredientWidget />
        <IngredientWidget />
      </div>

      <button className="w-full rounded-md border border-yellow-600 p-1 text-sm text-yellow-600 cursor-pointer ">
        <div className="flex items-center gap-1"></div>
        <AddIcon fontSize="small" className="text-yellow-600" />
        Add Ingredients
      </button>
    </div>
  );
};

export default RecipeDetailWidget;
