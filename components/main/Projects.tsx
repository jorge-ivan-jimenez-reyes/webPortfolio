import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/ioslab.png"
          title="IOS LAB PORTFOLIO"
          description="The platform provides an intuitive and comprehensive interface that allows
          professors, department heads, and administrators to access and manage information efficiently."
        />
        
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Web portfolio for a space-themed website. The website is built using React js and Tailwind CSS."
        />

        <ProjectCard
          src="/dashuser.png"
          title="Academic Management Dashboard"
          description="In collaboration with the IOS Lab and the Faculty of Engineering at Universidad Panamericana, I am developing a user dashboard designed for academic management. This platform allows faculty members to efficiently manage their profiles and upload their CVs, significantly enhancing the organization and accessibility of academic information."
        />
      </div>
    </div>
  );
};

export default Projects;
