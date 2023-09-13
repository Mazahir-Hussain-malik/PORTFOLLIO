import React from "react";
import { TypeAnimation } from "react-type-animation";
import myimage from "../../public/images/mypic.png";
import { ImLocation } from "react-icons/im";
import { AiOutlineGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 py-10 w-[90%] mx-auto">
        <div className="my-auto">
          <h2 className="text-white md:text-[60px] text-[35px] font-semibold my-10 ">
            Hi, I’m{" "}
            <TypeAnimation
              sequence={["Mazahir", 900, "Developer", 900, "Desighner", 900]}
              style={{ fontSize: "0.8em" }}
              repeat={Infinity}
            />{" "}
            👋
          </h2>
          <p>
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
          <div className="my-8">
            <p className=" flex text-[18px] my-2 ">
              <ImLocation className="mx-2 text-[22px]" />{" "}
              <span>Gilgit , Pakistan </span>
            </p>
            <p className="flex my-2">
              <div className="w-3 h-3 bg-[green] animate-pulse rounded-[50%] mx-2 my-auto"></div>
              <p>Available for new projects</p>
            </p>
          </div>
          <div className="flex space-x-8 text-[30px] my-4">
            <AiOutlineGithub className="cursor-pointer hover:text-gray-200 transition-all ease-in-out delay-150 " />
            <BsTwitter className="cursor-pointer hover:text-gray-200 transition-all ease-in-out delay-150 " />
            <FaFigma className="cursor-pointer hover:text-gray-200 transition-all ease-in-out delay-150 " />
          </div>
        </div>
        <div className="h-auto overflow-hidden mx-auto">
          <img
            src={myimage}
            alt=""
            className="w-[70%] mx-auto my-4 "
            style={{
              boxShadow:
                "rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
