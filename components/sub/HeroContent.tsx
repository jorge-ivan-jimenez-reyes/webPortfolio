"use client";

import React from "react";
import Spline from "@splinetool/react-spline/next";

const cvUrl = "https://drive.google.com/file/d/1RgIJICXenY3oBtlZheRn4yhdAmZBbGHv/view?usp=sharing";
const contactUrl = "mailto:jorgeivanjimenez27@gmail.com?subject=Job%20Opportunity&body=Hi%20Jorge,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.";

const HeroContent = () => {
  const handleCvClick = () => {
    window.open(cvUrl, "_blank");
  };

  const handleProjectsClick = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    window.open(contactUrl, "_blank");
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
            Passionate about cybersecurity and data intelligence, with a strong focus on creating secure, innovative applications.
          </p>
          <p className="text-md text-gray-400 mt-2">
            I bring creative solutions to complex problems, with a focus on user experience and efficiency.
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
            <button 
              onClick={handleContactClick}
              className="py-2 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:opacity-90">
              Hire Me
            </button>
          </div>
          <div className="mt-8">
            <p className="text-lg text-gray-400">Key Skills:</p>
            <ul className="text-md text-gray-300 list-disc list-inside">
              <li>React, TypeScript, SwiftUI</li>
              <li>Cybersecurity Best Practices</li>
              <li>Data Intelligence & Analytics</li>
              <li>User-Centered Design</li>
              <li>Agile Methodologies & Team Collaboration</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
