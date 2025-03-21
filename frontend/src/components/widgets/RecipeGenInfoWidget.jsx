import React from "react";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const RecipeGenInfoWidget = () => {
  return (
    <div className="bg-white shadow-xs p-6 rounded-md">
      <div className="bg-gray-50 border rounded-md border-gray-400 border-dashed flex flex-col items-center p-4 gap-2">
        <CameraAltOutlinedIcon fontSize="" />
        <p className="text-yellow-600 text-sm underline cursor-pointer">
          Upload Photo
        </p>
        <p className="text-xs font-light text-gray-600">
          PNG or JPEG (max. 10mb)
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <p className="text-xs font-medium">Recipe name</p>
        <input
          type="text"
          placeholder="eg: Savory Stuffed Bell Peppers"
          className="text-sm w-full border-gray-300 border p-2 rounded-md font-light shadow-xs outline-none"
        />
        <p className="text-xs font-medium">Number of servings</p>
        <div className="text-sm w-full border-gray-300 border p-2 rounded-md font-light shadow-xs flex justify-between">
          {" "}
          <input
            type="text"
            placeholder="eg: 4 or 3-5"
            className="outline-none w-full"
          />
          <p className="font-light text-xs">People</p>
        </div>

        <p className="text-xs font-medium">Cook duration</p>
        <div className="text-sm w-full border-gray-300 border p-2 rounded-md font-light shadow-xs flex justify-between">
          <input type="text" placeholder="30" className="outline-none w-full" />
          <p className="font-light text-xs ">Minutes</p>
        </div>

        <p className="text-xs font-medium">Set recipe as</p>

        <div className="border border-gray-300 shadow-xs rounded-md p-2 flex gap-4">
          <input type="radio" />
          <div>
            <p className="text-sm">Public</p>
            <p className="text-xs text-gray-700">
              Anyone can view this recipe
            </p>
          </div>
        </div>
        <div className="border border-gray-300 shadow-xs rounded-md p-2 flex gap-4">
          <input type="radio" />
          <div className="">
            <p className="text-sm">Friends Only</p>
            <p className="text-xs text-gray-700">
              Only your friends can view this recipe
            </p>
          </div>
        </div>
        <div className="border border-gray-300 shadow-xs rounded-md p-2 flex gap-4 ">
          <input type="radio" />
          <div className="">
            <p className="text-sm">Private</p>
            <p className="text-xs text-gray-700">
              Only you can view this recipe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeGenInfoWidget;
