import React from "react";

const InstructionWidget = ({ step, number }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-md p-4 flex items-center gap-4 bg-white">
        <p className="font-medium text-xl">{number}</p>
        <p className="text-sm text-gray-700">{step}</p>
      </div>
    </div>
  );
};

export default InstructionWidget;
