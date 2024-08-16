import React from "react";

export const Button = ({ buttonValue, buttonColorValue, onClick }) => {
  const colorClasses = {
    red: "hover:bg-red-600 ",
    green: "hover:bg-green-600",
    gray: "hover:bg-gray-600",
    orange: "hover:bg-orange-600",
  };
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={`border border-black py-1 w-20 rounded-2xl m-1 font-bold active:scale-90 ${colorClasses[buttonColorValue]} }`}
      >
        {buttonValue}
      </button>
    </>
  );
};
