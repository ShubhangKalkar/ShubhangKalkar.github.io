import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode !== true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center text-white"
              : "text-5xl font-bold px-4 md:px-0 text-center"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-white"
                  : "mt-4 text-xl text-justify text-gray-500"
              }
            >
              With a strong foundation in software engineering and a growing expertise in data engineering, I am passionate about designing systems that are robust, scalable, and driven by real-world data. Pursuing my M.S. in Data Analytics at San Jose State University, I have built a career around solving complex problems through backend development, cloud architecture, and real-time data processing.              <br />
              <br />
              Over the past three years, I have contributed to projects ranging from microservices architecture at Nokia to large-scale data migrations and analytics platforms at Infosys. My work consistently focuses on improving system performance, streamlining data workflows, and enabling smarter decision-making through technology. I am motivated by the intersection of software, cloud infrastructure, and AI — always aiming to create solutions that are efficient, innovative, and future-ready.            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-white"
                  : "mt-4 text-xl text-justify text-gray-500"
              }
            >
              
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>



      </div>
    </div>
  );
};

export default About;
