import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/om.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-b from-black to-[#111111] text-white scroll-smooth"
    >
      {/* Left: Text */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I'm <span className="text-emerald-400">Om Prajapati</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          A{" "}
          <span className="text-white font-semibold">MERN Stack Developer</span>{" "}
          passionate about crafting modern, fast, and user-friendly web
          applications.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        </div>
      </motion.div>

      {/* Right: Photo */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-gray-900 via-black to-emerald-600 p-1 shadow-lg">
          <img
            src={myPhoto}
            alt="om"
            className="w-full h-full object-cover rounded-full border-4 border-black"
          />
        </div>
      </motion.div>
    </section>
  );
}
