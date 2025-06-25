"use client";
import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "🎓 Bachelor of Technology (B.Tech, CSE)",
    subtitle: "Dr. Ambedkar Institute of Technology for Handicapped, Kanpur",
    time: "2022 – Present",
    note: "(Pursuing)",
  },
  {
    title: "🏫 Intermediate (12th Grade)",
    subtitle: "Mahatma Gandhi Intermediate College, Gorakhpur – UP Board",
    time: "2022",
  },
  {
    title: "🏫 High School (10th Grade)",
    subtitle: "Navals National Academy, Gorakhpur – CBSE Board",
    time: "2020",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-cyan-950 text-white py-16 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl border border-cyan-700 shadow-xl"
      >
        <motion.h2
          className="text-center text-3xl font-bold text-cyan-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-5 rounded-lg border border-cyan-700 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-1">
                {edu.title}
                {edu.note && (
                  <span className="text-sm font-normal text-gray-300 ml-2">
                    {edu.note}
                  </span>
                )}
              </h3>
              <p className="text-gray-300">{edu.subtitle}</p>
              <p className="text-gray-400 text-sm">{edu.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
