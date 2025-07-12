import React from "react";

export const ProgressBar = ({ percentage, full }) => {
  return (
    <div className={`${full ? "w-full" : "w-24"} bg-gray-200 rounded-full h-2`}>
      <div
        className="bg-gray-800 h-2 rounded-full transition-all duration-700"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
