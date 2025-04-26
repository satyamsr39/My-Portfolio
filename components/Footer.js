import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-4 mt-10">
      <div className="text-center text-gray-100 font-semibold text-lg mb-2">
        📬 Connect with me
      </div>
      <div className="flex justify-center gap-6 flex-wrap text-gray-300 text-md">
        <a
          href="https://github.com/satyamsr39"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/satyam-singh-44a432293"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://www.instagram.com/satyamsinghrajput139/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <FaInstagram /> Instagram
        </a>
        <a href="mailto:sars8174@gmail.com" className="flex items-center gap-2 hover:underline">
          <MdEmail /> sars8174@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
