import React from "react";
import { Button } from "../buttons/Button";

export const ColorSelector = () => {
  return (
    <div className="px-3 py-2 m-4 border border-red-600 min-h-80 w-96">
      <h1>Select Colors</h1>
      <div>
        <Button buttonValue={"Red"} buttonColorValue={"red"} />
        <Button buttonValue={"Green"} buttonColorValue={"green"} />
        <Button buttonValue={"Grey"} buttonColorValue={"gray"} />
        <Button buttonValue={"Orange"} buttonColorValue={"orange"} />
      </div>
    </div>
  );
};
