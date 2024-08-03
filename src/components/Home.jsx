import React from "react";
import pic from "../../public/me3.jpg";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-0 pt-16 pb-28 bg-gray-800 text-gray-100"
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          <span className="text-xl text-teal-400">Welcome In My Feed</span>
          <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1 className="text-teal-300">Hello, I'm a</h1>
            <ReactTyped
              className="text-teal-500 font-bold"
              strings={["Developer", "Programmer", "Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <br />
          <p className="text-sm md:text-md text-justify">
            I am Eklavya Gupta, a CSE student at the Kalinga Institute of
            Technology. I discovered my passion for development early on and
            have since honed my skills in development and data structures and
            algorithms (DSA). I have participated in significant projects and
            hackathons, where I am known for bringing creative solutions to
            complex challenges and fostering successful collaborations. Outside
            of work, I enjoy watching movies and have a strong interest in
            homeopathy medicine. I invite you to explore my portfolio and
            connect for potential collaborations.
          </p>
          <br />
          {/* social media icons */}
          <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
              <h1 className="font-bold text-center text-teal-300">
                Available on
              </h1>
              <ul className="flex space-x-5">
                <li>
                  <a
                    href="https://www.facebook.com/eklavya.gupta.39566/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareFacebook className="text-2xl text-teal-400 hover:text-teal-300 cursor-pointer transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/eklavya-gupta-05994829b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-teal-400 hover:text-teal-300 cursor-pointer transition-colors duration-300" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegram className="text-2xl text-teal-400 hover:text-teal-300 cursor-pointer transition-colors duration-300" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold text-center text-teal-300">
                Currently working on
              </h1>
              <div className="flex space-x-5">
                <SiMongodb className="text-2xl md:text-3xl text-teal-400 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <SiExpress className="text-2xl md:text-3xl text-teal-400 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaReact className="text-2xl md:text-3xl text-teal-400 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                <FaNodeJs className="text-2xl md:text-3xl text-teal-400 hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col items-center justify-center md:ml-48 md:mt-20 mt-8 order-1">
          <img
            src={pic}
            className="rounded-full md:w-[450px] md:h-[450px] mb-12"
            alt="Eklavya Gupta"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
