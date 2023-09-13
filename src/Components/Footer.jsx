import React from "react";
import { FiMail } from "react-icons/fi";
import { RxCopy } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <div>
        <div className="w-[90%] mx-auto">
          <div className="w-full text-center my-1  py-10">
            <button className="bg-[#374151] hover:bg-[#D1D5DB] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-2 px-6 rounded-[10px] transition-colors ease-in-out delay-100">
              Get in touch
            </button>
          </div>
          <div className="text-center">
            <h2 className="md:w-[60%] w-[95%] mx-auto text-[30px]">
              What’s next? Feel free to reach out to me if you're looking for a
              developer, have a query, or simply want to connect.
            </h2>
          </div>
          <div className="md:w-[30%] w-[95%] mx-auto my-6 flex text-center md:space-x-4 space-x-2">
            <FiMail className="text-white md:text-[40px] text-[25px]" />
            <h2 className="md:text-[25px] text-[20px] font-semibold">
              reachsagarshah@gmail.com
            </h2>
            <RxCopy className="md:text-[40px] text-[40px] text-white " />
          </div>
        </div>
        <div className="text-center my-2">
          <p>You may also find me on these platforms!</p>
          <div className="text-[30px] text-center lg:w-[10%] md:w-[20%] w-[95%] flex items-center mx-auto my-8 ">
            <BsGithub className="mx-auto" />
            <FaTwitter className="mx-auto" />
            <FiFigma className="mx-auto" />
          </div>
        </div>
        <div className=" w-[98%] mx-auto py-12 text-center">
          <h3 className="md:text-[30px] text-[22px]">
            2023 | Designed and coded with ❤️️ by Mazahir Hussain
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
