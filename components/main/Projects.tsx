import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center gap-12 py-20 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-16">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 justify-center max-w-7xl mx-auto">
        <ProjectCard
          src="/ioslab.png"
          title="IOS LAB PORTFOLIO"
          description="The platform provides an intuitive and comprehensive interface that allows professors, department heads, and administrators to access and manage information efficiently."
          techStack="React, TypeScript, Tailwind CSS, Node.js"
          impact="Improved user management efficiency by 50%."
        />
        <ProjectCard
          src="/dashuser.png"
          title="Academic Management Dashboard"
          description="In collaboration with the IOS Lab and the Faculty of Engineering at Universidad Panamericana, I am developing a user dashboard designed for academic management."
          techStack="React, SwiftUI, Firebase"
          impact="Enhanced academic information accessibility by 60%."
        />
        <ProjectCard
          src="/chatgptlocal.png"
          title="Local ChatGPT with Llama 2"
          description="I've built a local version of ChatGPT using the Llama 2 model. This implementation allows users to experience advanced AI capabilities directly on their own machines."
          techStack="Vanilla JavaScript, Llama 2, React"
          impact="Enabled private AI interactions, ensuring data security."
        />
        <ProjectCard
          src="/mernapp.png"
          title="Finance Management Application"
          description="Developed a finance management app using the MERN stack. Integrated a database to manage financial data and transactions."
          techStack="MERN Stack (MongoDB, Express.js, React, Node.js)"
          impact="Reduced manual financial tracking by 80%."
        />
        <ProjectCard
          src="/perntodo.png"
          title="Todoist Application with PERN Stack"
          description="Created a full-featured Todoist application using the PERN stack (PostgreSQL, Express.js, React, Node.js). The app allows users to manage tasks efficiently with real-time updates and a robust backend."
          techStack="PERN Stack (PostgreSQL, Express.js, React, Node.js)"
          impact="Showcased my proficiency in building full-stack applications with complex database interactions."
        />
        <ProjectCard
          src="/viajealinterior.png"
          title="Viaje al Interior del Cuerpo Humano"
          description="An interactive web application allowing users to explore the human body through modern web technologies and 3D models embedded with Spline."
          techStack="XAMPP (Apache, MySQL, PHP), HTML5, CSS3, JavaScript, Spline"
          impact="Enhanced learning through 3D interactive models, improving user engagement with educational content."
        />
      </div>
    </section>
  );
};

export default Projects;
