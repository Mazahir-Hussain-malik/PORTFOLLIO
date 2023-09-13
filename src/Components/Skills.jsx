import React from "react";
import reactjs from "../assets/images/icon-react.svg";
import iconfigma from "../assets/images/icon-figma.svg";
import scss from "../assets/images/icon-sass.svg";
import Nextjs from "../assets/images/icon-nextjs.svg";
import git from "../assets/images/icon-git.svg";
import tailiwindcss from "../assets/images/icon-tailwindcss.svg";
import Nodejs from "../assets/images/icon-nodejs.svg";
import Javascript from "../assets/images/icon-javscript.svg";
import iconmongodb from "../assets/images/icon-mongodb.svg";
import express from "../assets/images/icon-express.svg";

const skillData = [
  {
    icon: Javascript,
    caption: "Javascript",
  },

  {
    icon: reactjs,
    caption: "React.js",
  },
  {
    icon: Nextjs,
    caption: "Next.js",
  },
  {
    icon: scss,
    caption: "Sass/Scss",
  },
  {
    icon: tailiwindcss,
    caption: "TailwindCss",
  },
  {
    icon: iconfigma,
    caption: "Figma",
  },
  {
    icon: Nodejs,
    caption: "Node.js",
  },
  {
    icon: git,
    caption: "Git",
  },
  {
    icon: iconmongodb,
    caption: "MongoDB",
  },
  {
    icon: express,
    caption: "Express.js",
  },
];

const Skills = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="w-full text-center my-10 ">
          <button className="bg-[#374151] hover:bg-[#D1D5DB] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-1 px-4 rounded-[10px] transition-colors ease-in-out delay-100">
            Skills
          </button>
        </div>
        <p className="text-[#D1D5DB] my-10 py-5 text-center">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="grid md:grid-cols-5 grid-cols-2 w-[90%] mx-auto md:gap-10 gap-4 py-8">
          {skillData.map((items, index) => {
            return (
              <>
                <div className="text-center  transition ease-linear hover:scale-105 py-5">
                  <img src={items.icon} alt="icons" className="mx-auto" />
                  <h2 className="">{items.caption}</h2>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
