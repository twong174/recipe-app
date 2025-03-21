import React from "react";

const IngredientsWidget = ({ ingredients }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <h1 className="font-medium text-lg">Ingredients</h1>
      <ul className="grid grid-cols-2 text-sm text-gray-700 gap-2 mt-2">
      {ingredients.map((ingredient, index) => (
          <li key={index} className="text-sm text-gray-700">
            {ingredient.original}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsWidget;
