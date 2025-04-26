import React from 'react';

const Navbar = () => {
  return (
    <div className="md:flex h-auto p-4 justify-between items-center bg-cyan-700 w-full">
      <div className="text-4xl font-bold text-center">
        Satyam
      </div>
      <div className="md:flex-row justify-center flex flex-col text-lg">
        <a href="#profile" className="mx-2 cursor-pointer hover:font-semibold">Profile</a>
        <a href="#skills" className="mx-2 cursor-pointer hover:font-semibold">Skills</a>
        <a href="#education" className="mx-2 cursor-pointer hover:font-semibold">Education</a>
        <a href="#contact" className="mx-2 cursor-pointer hover:font-semibold">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
