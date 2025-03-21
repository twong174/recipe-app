import React from "react";
import LanguageIcon from "@mui/icons-material/Language";

const LabelWidget = ({labelIcon, labelTitle, labelDescription}) => {
  return (
    <div className="py-2 px-4 w-fit flex items-center gap-3 rounded-md">
      <div className="p-2 bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center">
        <LanguageIcon fontSize="small" className="text-yellow-600" />
      </div>
      <div>
        <p className="text-xs text-gray-600 tracking-tight">{labelTitle}</p>
        <p className="text-sm font-semibold"> {labelDescription} </p>
      </div>
    </div>
  );
};

export default LabelWidget;
