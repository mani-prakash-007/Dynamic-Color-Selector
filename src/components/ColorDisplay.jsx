import React from "react";

export const ColorDisplay = ({ colorValue }) => {
  return (
    <div className="flex flex-col px-16 py-3 m-4 border border-red-600 min-h-80 w-96">
      <h1 className="my-2">Display Color</h1>
      <div className={`border border-black h-60 w-60 ${colorValue}`}></div>
    </div>
  );
};
