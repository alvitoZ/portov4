"use client";
import React from "react";
import style from "./Star.module.css";

export const Star = ({ color }: { color: string }) => {
  return (
    <div className={`${style["containerY"]} w-fit h-fit`}>
      <div className="flex justify-center flex-col items-center">
        <div className={`${style["top-star"]} ${color}`}></div>
        <div className={`${style["center-star"]} ${color}`}></div>
        <div
          className={`flex flex-row justify-center items-center ${style["containerX"]}`}
        >
          <div className={`${style["left-star"]} ${color}`}></div>
          <div className={`${style["right-star"]} ${color}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Star;
