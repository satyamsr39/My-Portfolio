import React from "react";
import Skill from "./Skill";

const Contents = () => {
  return (<>
    <div className="about px-6 py-8">
      <div className="text-center font-bold text-2xl text-gray-800">ABOUT ME</div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4">
        <img
          className="h-70 w-64 rounded-full md:rounded-none shadow-lg"
          src="/profile.jpg"
          alt="Profile"
        />
        <div className="my-4  leading-relaxed max-w-2xl">
          👋 Hi, I'm <b>Satyam Singh</b>, a passionate <b>Web Developer</b> with
          expertise in building dynamic, responsive, and scalable web
          applications. I specialize in <b>MERN Stack, Next.js, and JavaScript</b>,
          crafting seamless user experiences with cutting-edge technologies.
          <br />
          🚀 With a strong foundation in <b>frontend and backend development</b>, I
          create robust applications, optimize performance, and ensure smooth
          functionality.
          <br />
          🔧<b>Tech Stack:</b>
          <ul className="list-disc list-inside mt-2">
            <li>
              <b>Frontend:</b> React.js, Next.js, Tailwind CSS, Bootstrap
            </li>
            <li>
              <b>Backend:</b> Node.js, Express.js
            </li>
            <li>
              <b>Database:</b> MongoDB
            </li>
            <li>
              <b>DSA & Problem Solving:</b> C++, Python
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contents;
