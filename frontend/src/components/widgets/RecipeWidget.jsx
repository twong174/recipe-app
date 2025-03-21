import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const RecipeWidget = ({ title, image, id }) => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col gap-1">
      {/* Title */}
      <h1 className="text-lg font-medium">{title}</h1>

      {/* Image */}
      <img src={image} className="rounded-lg bg-gray-50" />

      {/* Arrow Icon Container */}
      <div className="flex justify-end">
        <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-full cursor-pointer">
          <a href={`/recipe/${id}`}>
            <ArrowForwardOutlinedIcon fontSize="" className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeWidget;
