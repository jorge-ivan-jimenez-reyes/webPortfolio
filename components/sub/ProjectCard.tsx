import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform hover:scale-105 transition-transform duration-300 ease-in-out w-full h-[500px] flex flex-col">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-64 object-cover"
      />

      <div className="flex flex-col justify-between flex-grow p-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 rounded-b-lg">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <p className="mt-4 text-lg text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
