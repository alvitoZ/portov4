"use client";
import React from "react";

enum Size {
  sm = "sm",
  md = "md",
  lg = "lg",
}

enum Bold {
  normal = "normal",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
}

enum Line {
  l3 = "l3",
  l6 = "l6",
}

export const CustomText = ({
  text,
  size,
  bold,
  line,
  spacing = false,
  underline = false,
}: {
  text: string;
  size?: string;
  bold?: string;
  line?: string;
  spacing?: boolean;
  underline?: boolean;
}) => {
  function setSize(size: string = "") {
    if (size == Size.sm || size == "") {
      return "text-xs";
    } else if (size == Size.md) {
      return "custom-text-lg";
    } else if (size == Size.lg) {
      return "text-3xl custom-text-3xl";
    }
  }

  function setBold(bold: string = "") {
    if (bold == Bold.normal || bold == "") {
      return "font-normal";
    } else if (bold == Bold.medium) {
      return "font-medium";
    } else if (bold == Bold.semibold) {
      return "font-semibold";
    } else if (bold == Bold.bold) {
      return "font-extrabold";
    }
  }

  function setLineHeight(line: string = "") {
    if (line == Line.l3) {
      return "leading-4";
    } else if (line == Line.l6) {
      return "leading-6";
    }
  }

  return (
    <p
      className={`${setSize(
        size
      )} text-white bg-none duration-700 ease-in-out hover:bg-[#63f058] hover:text-white ${
        underline ? "underline" : ""
      } ${setBold(bold)} ${spacing ? "tracking-widest" : ""} ${setLineHeight(
        line
      )}`}
    >
      {text}
    </p>
  );
};

export default CustomText;
