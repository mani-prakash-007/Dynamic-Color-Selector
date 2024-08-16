import { ColorSelector } from "./ColorSelector";
import { ColorDisplay } from "./ColorDisplay";
import { useState } from "react";

//States

export const ColorApp = () => {
  const [colorValue, setColorValue] = useState("bg-red-600");
  return (
    <div className="flex flex-col justify-center">
      <ColorSelector />
      <ColorDisplay colorValue={colorValue} />
    </div>
  );
};
