"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-cyan-950 py-6  border-t border-cyan-700/50 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <p className="text-gray-400 text-sm mb-1">
        © {new Date().getFullYear()} Satyam Singh
      </p>
      <p className="text-gray-600 text-xs italic">
        Built with React, Tailwind CSS & Framer Motion
      </p>
    </motion.footer>
  );
};

export default Footer;
