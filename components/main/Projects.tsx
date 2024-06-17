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
          src="/NewProject.png"
          title="New Amazing Project"
          description="This project showcases a cutting-edge application designed to revolutionize user experience in the tech industry. Built with the latest technologies, it offers unparalleled performance and functionality."
        />
      </div>
    </div>
  );
};

export default Projects;
