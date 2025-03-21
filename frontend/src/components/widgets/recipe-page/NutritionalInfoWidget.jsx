import React from "react";

const NutritionalInfoWidget = () => {

    return (
      <div className="bg-white rounded-md p-4 border border-gray-300 border-dashed ">
        <h1 className="text-lg font-medium">Nutritional Info</h1>
        <ul className="text-sm text-gray-700 flex flex-col gap-2 mt-2">
          <li>320 Calories</li>
          <li>25g Protein</li>
          <li>15g Fat</li>
          <li>5g Fiber</li>
          <li>2g Sugar</li>
          <li>20g Carbohydrates</li>

        </ul>
      </div>
    );
};

export default NutritionalInfoWidget;