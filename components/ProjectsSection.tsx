"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/p1.png",
    tag: ["All", "Hackathon"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Nextjs Portfolio Website",
    description: "Project 1 description",
    image: "/p1.png",
    tag: ["All", "Personal"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects =
    selectedTag === "All"
      ? projectsData
      : projectsData.filter((project) => project.tag.includes(selectedTag));
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white py-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2">
        {["All", "Personal", "Hackathon"].map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer ${
              selectedTag === tag
                ? "border-purple-500"
                : "border-slate-600 hover:border-white"
            }`}
          >
            {tag}
          </button>
        ))}
        {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Personal
        </button>
        <button>Hackathon</button> */}
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-16">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
