import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-gray-900" : "bg-white"}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-24 pb-12">
        <h2 className={darkMode
            ? "font-sans text-5xl font-bold px-4 md:px-0 text-center text-white"
            : "text-5xl font-bold px-4 md:px-0 text-center"}>
          About Me
        </h2>

        <motion.div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            A bit about me
          </h4>
          <p className={darkMode ? "mt-4 text-xl text-justify text-white"
                                 : "mt-4 text-xl text-justify text-gray-500"}>
            With a strong foundation in software engineering and a growing
            expertise in data engineering, I am passionate about designing
            systems that are robust, scalable, and driven by real-world data. 
            I have built a career around solving complex problems through backend
            development, cloud architecture, and real-time data processing.
            <br /><br />
            Over the past four years, I have contributed to projects ranging
            from microservices architecture at Nokia to large-scale data
            migrations and analytics platforms at Infosys. My work focuses on
            improving performance, streamlining data workflows, and enabling
            smarter decision-making.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
