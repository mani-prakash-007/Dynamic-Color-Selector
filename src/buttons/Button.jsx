import React from "react";

export const Button = ({ buttonValue, buttonColorValue, onClickEvent }) => {
  const colorClasses = {
    red: "hover:bg-red-600 ",
    green: "hover:bg-green-600",
    gray: "hover:bg-gray-600",
    orange: "hover:bg-orange-600",
    blue: "hover:bg-blue-600",
    amber: "hover:bg-amber-600",
    yellow: "hover:bg-yellow-600",
    lime: "hover:bg-lime-600",
  };
  return (
    <>
      <button
        type="button"
        onClick={onClickEvent}
        className={`border border-black py-1 w-20 rounded-2xl m-1 font-bold active:scale-90 ${colorClasses[buttonColorValue]} bg- }`}
      >
        {buttonValue}
      </button>
    </>
  );
};
