"use client";
import React from "react";
import NavBar from "@/components/navbar";
import BottomBar from "@/components/bottombar";
import { Star } from "@/components/atoms";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center w-full h-screen overflow-hidden">
      <div className="flex flex-col gap-4 p-6 relative">
        <NavBar />
        {children}
        <BottomBar />
      </div>
    </main>
  );
};

export default index;
