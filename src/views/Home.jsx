import React, { useContext } from "react";
import heroBg from "../assets/intropic.png";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className={darkMode ? "bg-gray-900" : "bg-white"}
      >
        <main
          className="mx-auto max-w-7xl px-4 py-16 flex flex-col items-center justify-center sm:px-6  md:flex-row lg:px-8 "
          //mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${breakpoint === "md" ? "flex-col" : "flex-row"} items-center justify-center justify-evenly`}
          // sm:px-6 mt-8 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-evenly h-screen
          id="/"
        >
          <div className="lg:text-left">
            <h1 className="mx-auto text-4xl tracking-tight font-extrabold text-gray-900 text-left py-8 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-white" : " text-black"}
              >
                Hi, I am Shubhang
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                <Typical
                  steps={[
                    "Software Engineer",
                    1000,
                    "Data Engineer",
                    1000,
                    "QA Engineer",
                    1000,
                    "Data Scientist",
                    1000
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              My interests lie in software engineering, web development and data analysis. I am also a graduate student pursuing MS in Data Analytics at San Jose State University and have 3 years of Software Developer experience.
            </p>
            <div className="flex md:justify-start ">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  target="_blank"
                  className="mr-5 cursor-pointer mt-8 hover:scale-125"
                >
                  <img alt="" src={darkMode ? el.url2 : el.url1}  />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex  lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:scale-105 md:py-4 md:text-lg md:px-10"
                  href="https://drive.google.com/file/d/1kQDLmdNa1dzCv1WdmLQ247FxEHzUsmeY/view?usp=sharing" target="_blank" >
                  Resume
                  </a>
              </div>
            </div>
          </div>
          <div>
          <motion.img
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
            src={heroBg}
            alt=""
            className="w-80 p-12 pb-8"
          />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
