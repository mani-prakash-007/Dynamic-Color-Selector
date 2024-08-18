import React from "react";
import { Button } from "../buttons/Button";

export const ColorSelector = (props) => {
  //Function for onClick Event
  const handleClick = (color) => {
    props.setColor(color);
  };
  return (
    <div className="px-3 py-2 m-4 border border-black w-96 rounded-2xl pb-5">
      <h1 className="font-bold text-lg text-center my-3">Select Colors</h1>
      <div className="my-2">
        <Button
          buttonValue={"Red"}
          buttonColorValue={"red"}
          onClickEvent={() => {
            handleClick("bg-red-600");
          }}
        />
        <Button
          buttonValue={"Green"}
          buttonColorValue={"green"}
          onClickEvent={() => {
            handleClick("bg-green-600");
          }}
        />
        <Button
          buttonValue={"Grey"}
          buttonColorValue={"gray"}
          onClickEvent={() => {
            handleClick("bg-gray-600");
          }}
        />
        <Button
          buttonValue={"Orange"}
          buttonColorValue={"orange"}
          onClickEvent={() => {
            handleClick("bg-orange-600");
          }}
        />
        <Button
          buttonValue={"Blue"}
          buttonColorValue={"blue"}
          onClickEvent={() => {
            handleClick("bg-blue-600");
          }}
        />
        <Button
          buttonValue={"Amber"}
          buttonColorValue={"amber"}
          onClickEvent={() => {
            handleClick("bg-amber-600");
          }}
        />
        <Button
          buttonValue={"Yellow"}
          buttonColorValue={"yellow"}
          onClickEvent={() => {
            handleClick("bg-yellow-200");
          }}
        />
        <Button
          buttonValue={"Lime"}
          buttonColorValue={"lime"}
          onClickEvent={() => {
            handleClick("bg-lime-600");
          }}
        />
      </div>
    </div>
  );
};
