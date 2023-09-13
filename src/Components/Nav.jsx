import React, { useState } from "react";
import DarkToggler from "./DarkToggler";
import { RiMenuFoldLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import logo from "../assets/images/logo.png";
const NavLink = [
  { text: "About", link: " /" },
  { text: "Work", link: " /" },
  { text: "Testimonials", link: " /" },
  { text: "Contact", link: " /" },
];

const NavLinks = ({ link, to, classProps }) => {
  return (
    <li className={`text-[14px]  hover:cursor-pointer ${classProps}`}>
      {link}
    </li>
  );
};

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      {/* large screen */}
      <nav className="nav md:block hidden w-[90%] mx-auto">
        <div className="flex justify-between  gap-10 py-0">
          <a href="" className="text-[35px] font-semibold  w-[30%]">
            <img src={logo} alt="logo" className="lg:w-[50%] w-[65%]" />
          </a>
          <ul className="flex justify-around gap-8 my-auto lg:w-[50%] w-[80%]">
            {NavLink.map((items, index) => {
              return (
                <>
                  <NavLinks
                    link={items.text}
                    key={index}
                    to={items.link}
                    classProps={``}
                  />
                </>
              );
            })}
            <li>
              <DarkToggler />
            </li>
            <li>
              <button className="py-1 lg:px-4 px-[0.7px] bg-[#fff] text-gray-700 font-semibold rounded-lg hover:bg-[#d2caca] transition ease-in delay-100 ">
                {" "}
                Download CV
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* mobile screen */}
      <nav className="w-[90%] mx-auto">
        <nav className="nav w-full py-2 md:hidden block">
          <div className="grid relative grid-cols-2  gap-10 py-4">
            <div>
              <a
                href=""
                className="text-[35px] font-semibold absolute left-5 -top-3 my-auto "
              >
                <img src={logo} alt="logo" className="w-[50%]" />
              </a>
            </div>
            <div>
              {toggle ? (
                <div>
                  <RxCross1
                    onClick={() => setToggle(!toggle)}
                    className="text-[35px] absolute right-5 top-7"
                  />
                </div>
              ) : (
                <div>
                  <RiMenuFoldLine
                    onClick={() => setToggle(!toggle)}
                    className="text-[35px] absolute right-5 top-7"
                  />
                </div>
              )}
            </div>

            <ul
              className={`grid grid-cols-1 mx-auto gap-8 my-auto b ${
                toggle ? "block" : "hidden"
              } col-span-2  transition-all ease-in mt-10 delay-200 py-10`}
            >
              {NavLink.map((items, index) => {
                return (
                  <>
                    <NavLinks
                      link={items.text}
                      key={index}
                      to={items.link}
                      classProps={``}
                    />
                  </>
                );
              })}
              <li>
                <DarkToggler />
              </li>
              <li>
                <button className="py-1 px-4 bg-[#fff] text-gray-700 font-semibold rounded-lg hover:bg-[#d2caca] transition ease-in delay-100 ">
                  {" "}
                  Download CV
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </nav>
    </>
  );
};

export default Nav;
