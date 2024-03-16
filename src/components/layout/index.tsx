"use client";
import React from "react";
import NavBar from "@/components/navbar";
import BottomBar from "@/components/bottombar";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex justify-center items-center w-full h-screen overflow-hidden loading-animation">
      <div className="flex flex-col gap-4 p-6 relative">
        <NavBar />
        {children}
        <BottomBar />
      </div>
    </main>
  );
};

export default index;
