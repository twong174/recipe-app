import React from "react";
import TestImage from "../../assets/test-img.png";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const RecipeWidget = () => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-1">
      {/* Title */}
      <h1 className="text-lg font-medium">Salad with Tahini Sauce</h1>

      {/* Image */}
      <img src={TestImage} className="rounded-lg bg-gray-50" />

      {/* Arrow Icon Container */}
      <div className="flex justify-end">
        <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-full cursor-pointer">
          <a href="/recipe">
            <ArrowForwardOutlinedIcon fontSize="" className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeWidget;
