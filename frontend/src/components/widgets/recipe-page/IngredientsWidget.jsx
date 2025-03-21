import React from "react";

const IngredientsWidget = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <h1 className="font-medium text-lg">Ingredients</h1>
      <ul className="grid grid-cols-2 text-sm text-gray-700 gap-2 mt-2">
        <li>1 lb ground beef 70-80% lean</li>
        <li>2 tbsp olive oil</li>
        <li>1 tsp smoked paprika</li>
        <li>1/2 tsp cayenne pepper</li>
        <li>Salt and paper to taste</li>
        <li>8 small flour tortillas</li>
        <li>1 cup shredded lettuce</li>
        <li>1/2 cup chopped red onion</li>
        <li>1/4 cup chopped fresh cilantro</li>
        <li>1 avocado, sliced</li>
      </ul>
    </div>
  );
};

export default IngredientsWidget;
