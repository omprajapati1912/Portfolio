import React from "react";
import { motion } from "framer-motion";

import chatImg from "../../src/assets/Todo-list.png";
import portfolioImg from "../../src/assets/portfolio.jpeg";
import shopImg from "../../src/assets/gym.jpg";
import youtube from "../../src/assets/youtube.png";

const projects = [
  {
    title: "ToDo-list",
    description:
      "A simple and efficient ToDo List app built with the MERN stack, enabling users to create, update, and delete tasks with a clean and responsive UI.",
    tech: ["#MERNSTACK"],
    image: chatImg,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with JavaScript, React, and styled using Tailwind CSS for a modern UI.",
    tech: ["#React", "#JavaScript", "#TailwindCSS"],
    image: portfolioImg,
  },
  {
    title: "GYM Website",
    description:
      "A fitness-focused web application built with the MERN stack , offering workout plans, trainer profiles, class scheduling, and user progress tracking.",
    tech: ["#MERNSTACK"],
    image: shopImg,
  },
  {
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone built using React JS and CSS. It replicates the core features of YouTube including video listing, search functionality, and a dynamic video player.",
    tech: ["#ReactJS", "#CSS", "#RapidAPI"],
    image: youtube,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14">
          My Projects<span className="text-cyan-400">.</span>
        </h2>

        <div className="flex gap-8 ">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-none w-[300px] bg-black/30 backdrop-blur-md border border-gray-700 rounded-3xl p-5 hover:shadow-cyan-400/30 shadow-md transition-all relative snap-center"
            >
              {/* Image + Icons */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-44 object-cover rounded-xl"
                />
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-bold mt-5">{proj.title}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-4">
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-cyan-900/40 border border-cyan-600 rounded-md text-cyan-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
