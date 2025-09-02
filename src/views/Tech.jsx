// src/views/Tech.jsx
import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

export default function Tech() {
  const { state: { darkMode } } = useContext(ThemeContext);

  return (
    <section id="tech" className={ darkMode ? "bg-gray-900 pt-12 pb-8" : "bg-white pt-12 pb-8"}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`font-sans text-5xl font-bold text-center mb-8 ${darkMode ? "text-white" : ""}`}>
          Technologies & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {techStack.map((tool, i) => (
            <div
              key={i}
              className={`
                flex items-center gap-3 rounded-lg p-4 w-40
                ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900 shadow"}
              `}
            >
              <img src={tool.link} alt={tool.name} className="w-10 h-10" />
              <span className="text-md font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}