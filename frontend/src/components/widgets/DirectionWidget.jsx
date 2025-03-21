import React from "react";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const DirectionWidget = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <DragIndicatorOutlinedIcon fontSize="small" className="text-gray-500" />

        <p className="text-xs font-medium">01</p>

        <div className="border border-dashed border-gray-400 bg-gray-50 p-2 flex items-center justify-center cursor-pointer rounded-md">
          <CameraAltOutlinedIcon fontSize="" className="text-gray-400" />
        </div>

        <input
          type="text"
          placeholder="eg: Preheat your oven to 375 &deg; F (190 &deg; C). Grease a baking dish with non-stick spray and set it aside"
          className="flex-1 p-2 text-sm border border-gray-300 rounded-md font-light shadow-xs outline-none w-full"
        />

        <DeleteOutlineOutlinedIcon
          fontSize="small"
          className="text-gray-500 cursor-pointer"
        />
      </div>
    </>
  );
};

export default DirectionWidget;
