"use client";
import React, { useState, useEffect } from "react";

const skills = [
  { name: "Next.js", level: 90 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 90 },
];

const Skill = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="bg-cyan-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl border border-cyan-700 shadow-xl">
        <h2 className="text-3xl font-bold text-cyan-400 text-center mb-10">
          My Skills
        </h2>

   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="bg-white/10 hover:bg-cyan-500/20 backdrop-blur-md border border-cyan-700 shadow-lg rounded-xl p-4 text-center transition-transform hover:-translate-y-1 duration-300"
    >
      <h3 className="text-lg font-semibold text-cyan-300">{skill.name}</h3>
      {/* <p className="mt-2 text-sm text-gray-300">{skill.level}% Proficient</p> */}
    </div>
  ))}
</div>



      </div>
    </section>
  );
};

export default Skill;
