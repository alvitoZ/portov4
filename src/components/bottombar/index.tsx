"use client";
import React from "react";
import { CustomText } from "../atoms";

const index = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className="flex justify-between items-center">
      <div className="w-36 -rotate-12 hover:rotate-0 duration-700 ease-in-out">
        <p className="text-3xl text-white font-semibold underline">
          {`${day} / ${months[month]}. ${year}`}
        </p>
      </div>
      <div className="w-36 -rotate-[15deg] absolute bottom-10 right-4 -z-10">
        <CustomText
          text="魔界の悪魔、通称「邪神ちゃん」は、
          ある日突然人間界に召喚されてしまう。
          彼女を召喚したのは、神保町のボロアパートで暮らす
          ちょっとブラックな心を持つ女子大生「花園ゆりね」。
          「邪神ちゃん」を召還したものの
          彼女？を魔界に帰す方法がわからない。
          仕方なく一緒に暮らし始めた邪神ちゃんとゆりねだが、
          邪神ちゃん曰く、「召喚者が死ねば魔界に帰れる」。
          そこで邪神ちゃんがとった行動とは……!?　"
          size="sm"
          bold="normal"
        />
      </div>
    </div>
  );
};

export default index;
