import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center gap-3 py-20 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 justify-center max-w-7xl mx-auto">
        <ProjectCard
          src="/ioslab.png"
          title="IOS LAB PORTFOLIO"
          description="The platform provides an intuitive and comprehensive interface that allows professors, department heads, and administrators to access and manage information efficiently."
        />
        <ProjectCard
          src="/dashuser.png"
          title="Academic Management Dashboard"
          description="In collaboration with the IOS Lab and the Faculty of Engineering at Universidad Panamericana, I am developing a user dashboard designed for academic management. This platform allows faculty members to efficiently manage their profiles and upload their CVs, significantly enhancing the organization and accessibility of academic information."
        />
        <ProjectCard
          src="/chatgptlocal.png"
          title="Local ChatGPT with Llama 2"
          description="In this cutting-edge project, I've built a local version of ChatGPT using the Llama 2 model. This implementation, crafted with vanilla JavaScript, allows users to experience advanced AI capabilities directly on their own machines, ensuring privacy and performance without relying on cloud-based services. Dive into the future of AI with a seamless, locally hosted solution."
        />
        <ProjectCard
          src="/mernapp.png"
          title="Finance Management Application"
          description="Developed a finance management app using the MERN stack. Integrated a database to manage financial data and transactions. Designed an interface for tracking expenses, setting budgets, and generating reports. Engineered the app to be scalable, with potential for SaaS expansion."
        />
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
