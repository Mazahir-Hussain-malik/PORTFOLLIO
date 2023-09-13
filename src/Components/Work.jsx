import React from "react";
import project1 from "../assets/images/project1.svg";
const Work = () => {
  return (
    <>
      <div className="md:w-[90%] w-[98%] mx-auto py-10">
        <div className="w-full text-center my-4 ">
          <button className="bg-[#374151] hover:bg-[#D1D5DB] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-1 px-4 rounded-[10px] transition-colors ease-in-out delay-100">
            Work
          </button>
        </div>

        <div>
          <p className="text-center">
            Some of the noteworthy projects I have built:
          </p>
          {/* card one here */}
          <div className="grid md:grid-cols-2 grid-cols-1 my-10">
            <div className="bg-[#3B4859] p-4">
              <a
                href="https://nft-marketplace-sage.vercel.app/"
                target="_blank"
              >
                <img
                  src={project1}
                  alt="project1"
                  className="w-[100%%] mx-auto h-[50vh] shadow-2xl hover:scale-105 transition-all ease-in delay-150 rounded-2xl"
                />
              </a>
            </div>
            <div className="p-8 bg-[#1F2937] hover:bg-[#161c24] shadow-xl rounded-md">
              <h2 className="text-[#F9FAFB] text-[30px] ">Fiskil</h2>
              <p className="md:w-[80%] w-[95%] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="lg:w-[90%] w-[100%] grid lg:grid-cols-3 grid-cols-2   gap-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Git",
                ].map((items, index) => {
                  return (
                    <>
                      <div className=" mx-2">
                        <button className="bg-[#374151] text-[20px] w-[100%] font-semibold text-[#D1D5DB] rounded-lg py-1  px-3 hover:bg-[#667691] transition-all ease-in delay-150">
                          {items}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-10">
            <div className="p-8 bg-[#1F2937] hover:bg-[#161c24] shadow-xl rounded-md">
              <h2 className="text-[#F9FAFB] text-[30px] ">Fiskil</h2>
              <p className="md:w-[80%] w-[95%] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="lg:w-[90%] w-[97%] grid lg:grid-cols-3 grid-cols-2  gap-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Git",
                ].map((items, index) => {
                  return (
                    <>
                      <div className=" mx-2">
                        <button className="bg-[#374151] text-[20px] w-[100%] font-semibold text-[#D1D5DB] rounded-lg py-1  px-2 hover:bg-[#667691] transition-all ease-in delay-150">
                          {items}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="bg-[#3B4859] p-4">
              <a
                href="https://nft-marketplace-sage.vercel.app/"
                target="_blank"
              >
                <img
                  src={project1}
                  alt="project1"
                  className="w-[100%%] mx-auto h-[50vh] shadow-2xl hover:scale-105 transition-all ease-in delay-150 rounded-2xl"
                />
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-10">
            <div className="bg-[#3B4859] p-4">
              <a
                href="https://nft-marketplace-sage.vercel.app/"
                target="_blank"
              >
                <img
                  src={project1}
                  alt="project1"
                  className="w-[100%%] mx-auto h-[50vh] shadow-2xl hover:scale-105 transition-all ease-in delay-150 rounded-2xl"
                />
              </a>
            </div>
            <div className="p-8 bg-[#1F2937] hover:bg-[#161c24] shadow-xl rounded-md">
              <h2 className="text-[#F9FAFB] text-[30px] ">Fiskil</h2>
              <p className="md:w-[80%] w-[95%] my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="lg:w-[90%] w-[97%] grid lg:grid-cols-3 grid-cols-2   gap-4">
                {[
                  "React",
                  "Next.js",
                  "Typescript",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwindcss",
                  "Figma",
                  "Git",
                ].map((items, index) => {
                  return (
                    <>
                      <div className=" mx-2">
                        <button className="bg-[#374151] text-[20px] w-[100%] font-semibold text-[#D1D5DB] rounded-lg py-1  px-3 hover:bg-[#667691] transition-all ease-in delay-150">
                          {items}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
