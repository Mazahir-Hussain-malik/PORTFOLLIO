import React from "react";
import CardImage from "../assets/images/cardimage.png";

const CardData = [
  {
    cardimage: CardImage,
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    name: "John Doe",
    founder: "Founder - xyz.com",
  },
  {
    cardimage: CardImage,
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    name: "John Doe",
    founder: "Founder - xyz.com",
  },
  {
    cardimage: CardImage,
    description:
      "“Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.”",
    name: "John Doe",
    founder: "Founder - xyz.com",
  },
];
const Testimonials = () => {
  return (
    <>
      <div className="bg-[#111827] py-10 ">
        <div className="md:w-[90%] w-[100%] mx-auto">
          <div className="w-full text-center my-4 ">
            <button className="bg-[#374151] hover:bg-[#96a8c4] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-1 px-4 rounded-[10px] transition-colors ease-in-out delay-150">
              Testimonials
            </button>
          </div>
          <div>
            <p className="text-center my-8">
              Nice things people have said about me:
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-8">
              {CardData.map((items, index) => {
                return (
                  <>
                    <div className=" p-10 text-center rounded-3xl bg-[#1E2836] hover:bg-[#0e1218] hover:scale-105 transition-all ease-in-out delay-150 shadow-lg">
                      <img
                        src={items.cardimage}
                        alt="cardimage"
                        className="mx-auto my-2 p-3"
                      />
                      <p className="md:w-[90%] w-[100%] mx-auto leading-7 p-4">
                        {items.description}
                      </p>
                      <p className="my-2 text-[22px] font-semibold">
                        {items.name}
                      </p>
                      <p className="text-[20px]">{items.founder}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
