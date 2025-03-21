import React from "react";

const NutritionalInfoWidget = ({ nutrition }) => {
  return (
    <div className="bg-white rounded-md p-4 border border-gray-300 border-dashed ">
      <h1 className="text-lg font-medium">Nutritional Info</h1>
      <ul className="text-sm text-gray-700 flex flex-col gap-2 mt-2">
        {nutrition.map((nutrient, index) => (
          <li key={index}>
            {nutrient.amount} {nutrient.unit} {nutrient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionalInfoWidget;
