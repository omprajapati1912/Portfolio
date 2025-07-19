import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML 5", icon: "../../src/assets/html.png" },
  { name: "CSS 3", icon: "../../src/assets/css.png" },
  { name: "JavaScript", icon: "../../src/assets/javascript.png" },
  { name: "React JS", icon: "../../src/assets/react.png" },
  { name: "Node JS", icon: "../../src/assets/node.png" },
  { name: "Express JS", icon: "../../src/assets/express.png" },
  { name: "MongoDB", icon: "../../src/assets/mongodb.png" },
  { name: "GitHub", icon: "../../src/assets/github.png" },
];

const SkillGrid = ({ items }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 mt-10">
    {items.map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.12 }}
        className="flex flex-col items-center text-center bg-neutral-900 p-5 rounded-xl shadow-md hover:shadow-cyan-500/30 transition-all duration-300"
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-16 h-16 object-contain mb-3"
        />
        <p className="text-sm text-gray-300 font-semibold">{item.name}</p>
      </motion.div>
    ))}
  </div>
);

export default function Skills() {
  return (
    <section className="w-full py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
          Skills<span className="text-cyan-400">.</span>
        </h2>

        <SkillGrid items={skills} />
      </div>
    </section>
  );
}
