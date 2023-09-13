import React from "react";
import logoupwork from "../assets/images/logo-upwork.svg";

const ExprerienceData = [
  {
    logo: logoupwork,
    heading: "Sr. Frontend Developer",
    link1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "Nov 2021 - Present",
  },
  {
    logo: logoupwork,
    heading: "Sr. Frontend Developer",
    link1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "Nov 2021 - Present",
  },
  {
    logo: logoupwork,
    heading: "Sr. Frontend Developer",
    link1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "Nov 2021 - Present",
  },
];

const Experience = () => {
  return (
    <div className="bg-[#111827]">
      <div className="w-full text-center my-1  py-10">
        <button className="bg-[#374151] hover:bg-[#D1D5DB] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-1 px-4 rounded-[10px] transition-colors ease-in-out delay-100">
          Experience
        </button>
      </div>
      <div className="">
        <p className="text-center">
          Here is a quick summary of my most recent experiences:
        </p>
        <div className="py-10 my-10 grid grid-cols-1 gap-y-10">
          {ExprerienceData.map((items, index) => {
            return (
              <>
                <div
                  className="bg-[#1F2937] grid md:grid-cols-3 grid-cols-1 md:w-[60%] w-[95%] mx-auto py-4 rounded-lg transition-all ease-linear delay-150 hover:bg-[#28374d] gap-y-10 hover:scale-105"
                  key={index}
                  style={{
                    boxShadow: "0px 25px 25px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div>
                    <img src={items.logo} alt="logo" className="mx-auto" />
                  </div>
                  <div className="md:text-start  text-center">
                    <ul className="mx-auto grid grid-cols-1 gap-y-4 text-[16px] leading-6 text-[#E5E7EB]">
                      <li>{items.link1}</li>
                      <li>{items.link2}</li>
                      <li>{items.link3}</li>
                      <li>{items.link4}</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-center text-[#E5E7EB] ">{items.time}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
