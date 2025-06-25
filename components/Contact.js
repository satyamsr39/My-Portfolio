"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", message: "", email: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const Save = async () => {
    try {
      await fetch("https://my-portfolio-31pa.onrender.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("Message sent successfully! ✅");
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  const handleClick = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all the fields!");
    } else {
      Save();
      setForm({ name: "", message: "", email: "" });
    }
  };

  return (
    <section id="contact" className="bg-cyan-950 py-16 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-xl border border-cyan-700 shadow-xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-cyan-400 mb-6"
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col items-center space-y-4">
          <input
            value={form.name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full md:w-3/4 px-4 py-3 rounded-lg bg-gray-900/30 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
          />
          <input
            value={form.email}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full md:w-3/4 px-4 py-3 rounded-lg bg-gray-900/30 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
          />
          <textarea
            value={form.message}
            onChange={handleChange}
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full md:w-3/4 px-4 py-3 rounded-lg bg-gray-900/30 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
          />
          <button
            onClick={handleClick}
            className="mt-2 bg-gradient-to-r from-cyan-600 to-purple-700 hover:from-cyan-800 hover:to-purple-900 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Submit
          </button>

          {status && <p className="text-sm text-cyan-300 mt-2">{status}</p>}

          <div className="flex space-x-6 mt-8">
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                link: "mailto:sars8174@gmail.com",
              },
              {
                icon: <FaGithub />,
                label: "GitHub",
                link: "https://github.com/satyamsr39",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                link: "https://linkedin.com/in/satyamsr139",
              },
              
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center text-cyan-400 hover:text-white transition"
                whileHover={{ y: -3 }}
              >
                <div className="text-2xl">{social.icon}</div>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
