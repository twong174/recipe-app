import React from "react";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import ToggleButton from "./ToggleButton";

const IngredientWidget = () => {


  return (
<>
 <div className="flex items-center gap-2">
        <DragIndicatorOutlinedIcon fontSize="small" className="text-gray-500" />

        <div className="flex items-center border border-gray-300 rounded-md shadow-xs w-32">
          <input
            type="text"
            placeholder="4"
            className="w-12 p-2 text-sm font-light outline-none border-r border-gray-300"
          />
          <select
            name="pcs"
            id="pcs"
            className="flex-1 p-2 text-sm bg-gray-50 outline-none border-gray-300 rounded-r-md"
          >
            <option value="pcs">pcs</option>
            <option value="cups">cups</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="eg: Large bell peppers (any color)"
          className="flex-1 p-2 text-sm border border-gray-300 rounded-md font-light shadow-xs outline-none"
        />

        <DeleteOutlineOutlinedIcon
          fontSize="small"
          className="text-gray-500 cursor-pointer"
        />
      </div>
      <p className="text-xs font-medium flex items-center gap-2">
        Detailed specific size
        <ToggleButton />
      </p>
</>
   
  );
};

export default IngredientWidget;
