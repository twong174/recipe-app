import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className={`relative w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
          isOn ? "bg-yellow-600" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
            isOn ? "translate-x-5.5" : "translate-x-0.5"
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleButton;
