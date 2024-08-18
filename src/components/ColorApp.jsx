import { ColorSelector } from "./ColorSelector";
import { ColorDisplay } from "./ColorDisplay";
import { useState } from "react";

//States

export const ColorApp = () => {
  const [colorValue, setColorValue] = useState("null");

  const setColor = (colorValue) => {
    setColorValue(colorValue);
  };
  console.log(colorValue);
  return (
    <div className="flex flex-col justify-center">
      <ColorSelector setColor={setColor} />
      <ColorDisplay colorValue={colorValue} />
    </div>
  );
};
