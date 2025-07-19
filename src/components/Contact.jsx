import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-gradient-to-b from-black to-[#0b0b0b] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
          Get In Touch<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-16 max-w-xl mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just
          a friendly hello 👋
        </p>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 gap-10">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:shadow-cyan-400/30 transition-all duration-300"
          >
            <FaEnvelope size={32} className="text-cyan-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-300 mt-2 text-sm">
              omprajapati1912@gmail.com
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:shadow-purple-400/30 transition-all duration-300"
          >
            <FaPhone size={32} className="text-purple-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-300 mt-2 text-sm">+91 70966 20774</p>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          href="../../src/resume/Om-Resume.pdf"
          download
          className="mt-16 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black border border-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all shadow-lg hover:shadow-cyan-500/40"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
