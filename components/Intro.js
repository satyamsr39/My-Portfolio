"use client";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section
      id="intro"
      className="h-screen flex items-center justify-center bg-cyan-950 text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
          Hi, I'm <span className="text-cyan-400">Satyam</span>
        </h1>

       <p className="text-lg md:text-xl text-gray-300 mb-6">
  I blend full-stack development, algorithmic thinking, and AI to craft smart, scalable web experiences.
</p>


        <a
          href="/resume.pdf"
          download
          className="inline-block bg-cyan-400 text-cyan-950 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-cyan-300 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
