import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-md px-6 py-4 shadow-md border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-widest">Om Prajapati</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer group"
            >
              <a
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
              {/* Underline animation */}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
