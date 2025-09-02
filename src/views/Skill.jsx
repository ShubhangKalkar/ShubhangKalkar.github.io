import React, { useContext } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore } from '@fortawesome/free-brands-svg-icons';
import FadeInSection from './FadeInSections';
import { ThemeContext } from "../themeProvider";
import { skill } from '../constants.js';

const Skill = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return  (
    <div id="skill" className={ darkMode !== true ? "bg-white" : "bg-gray-900"}>
      <FadeInSection>
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-20 pb-12">
          <h1
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center text-white"
              : "text-5xl font-bold px-4 md:px-0 text-center"
          }
          >Skills</h1>
          <div className="skills-grid grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
            {skill.map((el) => (
              <div className="skill">
                <FontAwesomeIcon icon={faAppStore} size="4x" className={darkMode ? "text-white" : "text-black"}/>
                <h3 className={darkMode ? "text-xl font-semibold mt-4 block text-white" : "text-xl font-semibold mt-4 text-black"}>
                  {el.name}
                </h3>
                <p className={darkMode ? "mt-2 text-white" : "mt-2 text-black"}>
                  {el.desc}  
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skill;