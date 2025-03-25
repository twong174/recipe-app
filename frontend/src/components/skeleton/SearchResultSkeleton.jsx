import React from "react";

import SkeletonWidget from "./SkeletonWidget";

const SearchResultSkeleton = () => {
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr] gap-2 p-2">
      <div className="w-full h-full bg-gray-50">header</div>
      <div className="w-full h-full grid grid-cols-4 gap-2 grid-rows-3 ">
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget /> <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
        <SkeletonWidget />
      </div>
    </div>
  );
};

export default SearchResultSkeleton;
