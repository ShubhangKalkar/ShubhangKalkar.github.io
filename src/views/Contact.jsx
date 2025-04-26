import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="contact"
      className={
        darkMode
          ? "bg-black pt-24 pt-24 text-white md:h-screen justify-center"
          : "bg-gray-100 pt-24 md:h-screen justify-center"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500 text-center">
            Have Something in Mind?
          </h4>
          <p className="mt-5 text-gray-500 text-xl text-center">
            Let's Talk About It!
            <br />
            I'm always here to chat. Whether you have questions, ideas, or <br/>just want to say hello, feel free to drop me a message.
          </p>
        </div>
        <div className="mt-5 flex justify-center items-center md:items-stretch  flex-col md:flex-row pb-10">
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  target="_blank"
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-0 hover:scale-125 flex flex-col justify-center items-center"
                >
                  <img alt="" src={darkMode ? el.url2 : el.url1} />
                </a>
              ))}
            </ul>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-black text-black text-lg py-5 flex justify-center md:mt-0"
            : "w-full bg-white text-white text-lg py-5 flex justify-center md:mt-0"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by Vishal
      </div>
    </div>
  );
};

export default Contact;
