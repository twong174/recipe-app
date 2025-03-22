import React from "react";

const NutritionalInfoWidget = ({ nutrition }) => {
  // Filter and format the nutrition data
  const filteredNutrition = nutrition
    .filter((nutrient) => {
      const lowerCaseName = nutrient.name.toLowerCase();
      return (
        lowerCaseName.includes("protein") ||
        lowerCaseName.includes("calories") ||
        lowerCaseName.includes("fat") ||
        lowerCaseName.includes("carbohydrates")
      );
    })
    .filter((nutrient) => {
      // Exclude "saturated fat" and "net carbohydrates"
      const lowerCaseName = nutrient.name.toLowerCase();
      return (
        !lowerCaseName.includes("saturated") &&
        !lowerCaseName.includes("net")
      );
    })
    .map((nutrient) => ({
      ...nutrient,
      amount: Math.round(nutrient.amount), // Round to the nearest whole number
    }));

  return (
    <div className="bg-white rounded-md p-4 border border-gray-300 border-dashed">
      <h1 className="text-lg font-medium">Nutritional Info</h1>
      <ul className="text-sm text-gray-700 flex flex-col gap-2 mt-2">
        {filteredNutrition.map((nutrient, index) => (
          <li key={index}>
            {nutrient.amount}
            {nutrient.unit} {nutrient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NutritionalInfoWidget;