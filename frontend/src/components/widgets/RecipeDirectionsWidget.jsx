import React from "react";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import DirectionWidget from "./DirectionWidget";

import AddIcon from "@mui/icons-material/Add";

const RecipeDirectionsWidget = () => {
  return (
    <div className="bg-white shadow-xs h-full p-4 rounded-md flex flex-col gap-2">
      <p className="text-xs font-medium flex items-center gap-1">
        Directions
        <ErrorOutlineOutlinedIcon fontSize="" />
      </p>

      <div className="flex-1 overflow-y-auto flex flex-col gap-2">
        <DirectionWidget />
        <DirectionWidget />
      </div>

      <button className="w-full rounded-md border border-yellow-600 p-1 text-sm text-yellow-600 cursor-pointer flex items-center justify-center gap-1">
        <div className="flex items-center gap-1"></div>
        <AddIcon fontSize="small" className="text-yellow-600" />
        Add Directions
      </button>
    </div>
  );
};

export default RecipeDirectionsWidget;
