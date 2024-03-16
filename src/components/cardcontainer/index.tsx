"use client";
import React from "react";
import { CardImage, Star } from "../atoms";
import Link from "next/link";

const index = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div>
        <div className="absolute left-[-20px] -rotate-45">
          <Star color="medusaStar" />
        </div>
        <div className="-rotate-[10deg] top-14 relative z-10 w-fit hover:top-0 ease-in-out duration-700 animation-layout">
          <Link href={"https://github.com/alvitoZ"} passHref>
            <CardImage
              image="/medusa.jpeg"
              text="Medusa / Devil"
              left={false}
            />
          </Link>
          {/* medusa */}
        </div>
        <div className="-rotate-[5deg] left-4 relative z-30 w-fit hover:left-0 ease-in-out duration-700 animation-layout">
          <CardImage
            image="/jashin.jpeg"
            text="Jashin Chan / Devil"
            left={false}
          />
          {/* jashinchan */}
        </div>
      </div>

      <div>
        <div className="absolute top-24 -translate-x-16 -rotate-12">
          <Star color="lierreStar" />
        </div>
        <div className="absolute bottom-14 -translate-x-8 -rotate-[30deg]">
          <Star color="jashinStar" />
        </div>
        {/* <div className="-rotate-[4deg] relative right-6 w-fit"> */}
        <div className="-rotate-[4deg] relative right-6 w-fit hover:right-0 ease-in-out duration-700 animation-layout">
          <CardImage image="/lierre.jpeg" text="Lierre / Angel" left={true} />
          {/* lierre */}
        </div>
        <div className="absolute bottom-28 right-0 -rotate-45">
          <Star color="pinoStar" />
        </div>
        {/* <div className="-rotate-12 relative z-20 bottom-16 right-3 w-fit"> */}
        <div className="-rotate-12 relative z-20 bottom-16 right-3 w-fit hover:bottom-0 ease-in-out duration-700 animation-layout">
          <CardImage image="/pino.jpeg" text="Pino / Angel" left={true} />
          {/* pino */}
        </div>
      </div>
    </div>
  );
};

export default index;
