import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import Postman from "../../public/postman2.png";
import springBoot from "../../public/springBoot.jpg";
import Linux from "../../public/Linux.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import node from "../../public/node.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: node,
      name: "Node",
    },
    {
      id: 5,
      logo: css,
      name: "CSS",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
    {
      id: 7,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 8,
      logo: oracle,
      name: "Oracle",
    },
    {
      id: 9,
      logo: Linux,
      name: "Linux",
    },
    {
      id: 10,
      logo: Postman,
      name: "Postman",
    },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of Experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
