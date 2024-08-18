"use client";

import React from "react";
import Spline from "@splinetool/react-spline/next";

const cvUrl = "https://drive.google.com/file/d/1RgIJICXenY3oBtlZheRn4yhdAmZBbGHv/view?usp=sharing";

const HeroContent = () => {
  const handleCvClick = () => {
    window.open(cvUrl, "_blank");
  };

  const handleProjectsClick = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-black">
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full max-w-screen-lg p-6">
        <div className="w-full md:w-1/2 h-80 md:h-full">
          <Spline scene="https://prod.spline.design/Nv5V8ifD3xBeWDkR/scene.splinecode" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 md:ml-8">
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Student{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Passionate
            </span>{" "}
            Developer
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            I&apos;m a passionate cybersecurity and data intelligence student,
            eager to expand knowledge and skills.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button 
              onClick={handleCvClick}
              className="py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90">
              View My CV
            </button>
            <button 
              onClick={handleProjectsClick}
              className="py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90">
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
