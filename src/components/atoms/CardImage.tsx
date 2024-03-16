"use client";
import React from "react";
import Image from "next/image";
import { CustomText } from ".";

export const CardImage = ({
  image,
  text = "",
  left,
}: {
  image: string;
  text?: string;
  left?: boolean;
}) => {
  const resolution = 1000;

  const ImageContainer = () => {
    return (
      <Image
        priority
        className="w-52 min-w-32 md:h-80 h-56 object-cover"
        alt={"jashin chan dropkick" + image}
        src={image}
        width={resolution}
        height={resolution}
      />
    );
  };

  const Text = () => {
    return (
      <div
        className={`text-rotate bg-none hover:-rotate-90 duration-700 ease-in-out`}
      >
        <CustomText text={text} size="md" bold="medium" />
      </div>
    );
  };

  const setLeft = (left: boolean) => {
    if (left) {
      return (
        <>
          <ImageContainer />
          <Text />
        </>
      );
    } else {
      return (
        <>
          <Text />
          <ImageContainer />
        </>
      );
    }
  };

  return (
    <div className="flex items-center justify-center flex-row">
      {left != null ? setLeft(left) : <ImageContainer />}
    </div>
  );
};

export default CardImage;
