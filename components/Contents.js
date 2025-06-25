"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contents = () => {
  return (
    <section id="about" className="bg-cyan-950 text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

        {/* Card wrapper */}
        <div className="bg-white/5 backdrop-blur-md p-8 rounded-xl border border-cyan-700 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-shrink-0">
              <Image
                className="rounded-full w-48 h-48 object-center border-4 border-cyan-400 shadow-md"
                src="/profile_centered.jpg"

                alt="Profile"
                width={192}
                height={192}
              />
            </div>

            <div className="leading-relaxed text-gray-300 text-lg max-w-2xl">
              <p>
                👋 Hi, I&apos;m <span className="text-white font-semibold">Satyam Singh</span>, a
                passionate <span className="text-white font-semibold">Web Developer</span> with expertise in building
                dynamic, responsive, and scalable web applications.
              </p>
              <p className="mt-4">
                I specialize in <b className="text-cyan-300">MERN Stack, Next.js, and JavaScript</b>,
                crafting seamless user experiences with modern tools. With strong knowledge in
                both <b className="text-cyan-300">frontend and backend</b>, I focus on performance,
                maintainability, and smooth UX.
              </p>

              <p className="mt-4 font-semibold text-white">🔧 Tech Stack:</p>
              <ul className="list-disc list-inside mt-2">
                <li><b>Frontend:</b> React.js, Next.js, Tailwind CSS, Bootstrap</li>
                <li><b>Backend:</b> Node.js, Express.js</li>
                <li><b>Database:</b> MongoDB</li>
                <li><b>DSA & Problem Solving:</b> C++, Python</li>
              </ul>
            </div>
          </div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default Contents;
