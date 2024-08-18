import React, { Suspense } from "react";
import Spline from '@splinetool/react-spline/next';

const HeroContent = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <Suspense fallback={<div>Loading Spline scene...</div>}>
        <div className="h-1/2 w-full md:w-3/4 lg:w-2/3">
          <Spline 
            scene="https://prod.spline.design/Nv5V8ifD3xBeWDkR/scene.splinecode"
            onError={(error) => console.error('Error loading Spline scene:', error)}
          />
        </div>
      </Suspense>
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-white">
          Student{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Passionate
          </span>{" "}
          Developer
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          I&apos;m a passionate cybersecurity and data intelligence student, eager to expand knowledge and skills.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
