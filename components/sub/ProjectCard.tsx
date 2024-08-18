import Image from "next/image";
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  techStack: string;
  impact: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, title, description, techStack, impact }) => {
  return (
    <div className="bg-gradient-to-r from-purple-900 to-black rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative w-full h-48">
        <Image src={src} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="text-sm text-gray-300 mb-2">
          <strong>Tech Stack:</strong> {techStack}
        </div>
        <div className="text-sm text-gray-300">
          <strong>Impact:</strong> {impact}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
