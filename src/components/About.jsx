import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Web Developer",
    icon: "🌐",
  },
  {
    title: "React Developer",
    icon: "⚛️",
  },
  {
    title: "Backend Developer",
    icon: "🛠️",
  },
  {
    title: "Full Stack Developer",
    icon: "🧩",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-gradient-to-b from-black to-[#111111] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-md text-gray-400 uppercase tracking-widest mb-1">
          Introduction
        </p>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight text-white">
          About Me<span className="text-emerald-400">.</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-14 max-w-4xl">
          I'm a skilled software developer with experience in{" "}
          <span className="font-semibold text-white">JavaScript</span> and
          expertise in frameworks like{" "}
          <span className="font-semibold text-white">
            React, Node.js, Express.js, and MongoDB
          </span>
          . I'm a quick learner and collaborate closely with clients to create{" "}
          <span className="font-semibold text-white">
            efficient, scalable, and user-friendly
          </span>{" "}
          solutions that solve real-world problems. Let's bring your ideas to
          life!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl border border-gray-800 bg-[#0f0f0f] p-6 hover:border-emerald-400 shadow-md transition-all duration-300"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-5xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {skill.title}
                </h3>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 z-[-1] rounded-2xl bg-gradient-to-br from-emerald-400/10 via-violet-500/5 to-emerald-400/10 opacity-0 hover:opacity-100 transition duration-500 blur-md" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
