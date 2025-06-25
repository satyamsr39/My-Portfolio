"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'profile', label: 'Profile' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-cyan-950/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          Satyam<span className="text-cyan-400">.</span>
        </div>

        <div className="hidden md:flex space-x-8 text-white text-md font-medium">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative group transition-colors duration-200"
            >
              {label}
              <span className="block h-0.5 bg-cyan-400 max-w-0 group-hover:max-w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 bg-cyan-950 text-white flex flex-col space-y-4 text-lg">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
