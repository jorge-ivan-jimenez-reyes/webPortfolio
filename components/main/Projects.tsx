import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        My Projects
      </h1>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-6 px-5 justify-center">
        <div className="w-80">
          <ProjectCard
            src="/ioslab.png"
            title="IOS LAB PORTFOLIO"
            description="The platform provides an intuitive and comprehensive interface that allows
            professors, department heads, and administrators to access and manage information efficiently."
          />
        </div>

        <div className="w-80">
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Space Themed Website"
            description="Web portfolio for a space-themed website. The website is built using React js and Tailwind CSS."
          />
        </div>

        <div className="w-80">
          <ProjectCard
            src="/dashuser.png"
            title="Academic Management Dashboard"
            description="In collaboration with the IOS Lab and the Faculty of Engineering at Universidad Panamericana, I am developing a user dashboard designed for academic management. This platform allows faculty members to efficiently manage their profiles and upload their CVs, significantly enhancing the organization and accessibility of academic information."
          />
        </div>

        <div className="w-80">
          <ProjectCard
            src="/chatgptlocal.png"
            title="Local ChatGPT with Llama 2"
            description="In this cutting-edge project, I've built a local version of ChatGPT using the Llama 2 model. This implementation, crafted with vanilla JavaScript, allows users to experience advanced AI capabilities directly on their own machines, ensuring privacy and performance without relying on cloud-based services. Dive into the future of AI with a seamless, locally hosted solution."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
