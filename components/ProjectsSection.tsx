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
<<<<<<< HEAD
    previewUrl: "https://apubcc-taskaru.vercel.app/",
  },
  {
    id: 2,
    title: "Taskaru",
    description: "Project 2 description",
    image: "/taskaru.png",
    tag: ["All", "Hackathon"],
    gitUrl: "/",
    previewUrl: "https://apubcc-taskaru.vercel.app/",
  },
  {
    id: 3,
    title: "AIquidity",
    description: "Project 1 description",
    image: "/aiquidity.png",
    tag: ["All", "Hackathon"],
    gitUrl: "/",
    previewUrl: "https://ethglobal-agentic.vercel.app/",
=======
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
>>>>>>> 9822303 (portfolio)
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
<<<<<<< HEAD
      <h2
        className="text-center text-4xl font-bold text-white py-12"
        id="project"
      >
=======
      <h2 className="text-center text-4xl font-bold text-white py-12">
>>>>>>> 9822303 (portfolio)
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
<<<<<<< HEAD
=======
        {/* <button className="rounded-full border-2 border-purple-500 px-6 py-3 text-xl cursor-pointer">
          All
        </button>
        <button className="rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer">
          Personal
        </button>
        <button>Hackathon</button> */}
>>>>>>> 9822303 (portfolio)
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
