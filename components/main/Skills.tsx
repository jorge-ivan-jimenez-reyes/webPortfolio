import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

interface ImageData {
  Image: string;
  width: number;
  height: number;
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 py-10 md:py-20 relative overflow-hidden bg-black"
    >
      <h1 className="text-[32px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10 md:mb-16">
        My Skills
      </h1>
      <SkillText />
      <div className="flex flex-wrap justify-center mt-4 gap-5 items-center">
        {(Frontend_skill as ImageData[]).map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-5 items-center">
        {(Backend_skill as ImageData[]).map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center mt-4 gap-5 items-center">
        {(Full_stack as ImageData[]).map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
