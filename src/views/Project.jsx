import React, { useContext } from "react";
import FadeInSection from './FadeInSections';
import { ThemeContext } from "../themeProvider";
import { projects } from '../constants';

const Project = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  // JavaScript example to set image dimensions
  const images = document.querySelectorAll('.project-image');
  images.forEach(img => {
      img.style.width = '300px';
      img.style.height = '200px';
      img.style.objectFit = 'cover';
  });

  return  (
    <div id="project" className={darkMode !== true ? "bg-white" : "bg-gray-900"}>
    <FadeInSection>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-20 pb-12">
          <h1
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center text-white"
              : "text-5xl font-bold px-4 md:px-0 text-center"
          }
          >Projects</h1>
          <div className="projects-grid grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 gap-8">
            {projects.map((el, index) => (
              <div className="project" key={el.index}>
                <a href={el.link} target="_blank" rel="noreferrer">
                  <img src={el.img} className="zoom rounded-lg transition-transform duration-200 hover:scale-105 md:h-80 " alt="thumbnail"  />
                  </a>
                <div className="flex flex-row flex-wrap">
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <h2 className={darkMode ? "text-xl font-semibold mt-4 hover:underline text-white" : "text-xl font-semibold mt-4 hover:underline text-black"}>
                      {el.name}
                    </h2>
                  </a>
                  <a href={el.gitlink} target="_blank" rel="noreferrer" className="cursor-pointer ml-2 mt-2 w-10 h-10 hover:scale-125">
                    <img alt="Github" src={darkMode ? "https://img.icons8.com/material-outlined/48/FFFFFF/github.png" : "https://img.icons8.com/sf-regular-filled/48/github.png"} />
                  </a>
                </div>
                <p className={darkMode ? "mt-2 text-white" : "mt-2 text-black"}>{el.desc}</p>
                <br />
                <div className="flex-container flex flex-row flex-wrap">
                  {el.tech && el.tech.length > 0 && (el.tech.map((techItem) => (
                    <div className="bg-gray-50 w-auto m-1 p-1 px-2 rounded-lg text-center hover:scale-105">
                      {techItem}
                    </div>
                  )))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </FadeInSection>
    </div>
  );
}

export default Project;