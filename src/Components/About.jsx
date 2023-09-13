import React from "react";
import mypic1 from "../assets/images/mypic1.png";
const About = () => {
  return (
    <>
      <div className="md:py-10 py-4 bg-[#111827] ">
        <div className="w-[90%] mx-auto md:my-8 my-4 md:py-4 py-2">
          <div className="w-full text-center ">
            <button className="bg-[#374151] hover:bg-[#D1D5DB] hover:text-[#374151] text-[#D1D5DB] text-[14px] font-semibold py-1 px-2 rounded-[10px] transition-colors ease-in-out delay-100">
              About me
            </button>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 my-10 ">
            <div className="my-10 overflow-hidden">
              <img
                src={mypic1}
                alt="mypic1"
                className="w-[85%] rounded-xl hover:scale-105 transition-all ease-linear delay-150 mx-auto"
                style={{
                  boxShadow:
                    "rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px",
                }}
              />
            </div>
            <div className="my-auto mx-auto">
              <h2 className="text-[#F9FAFB] md:text-[30px] text-[20px] font-semibold leading-36 my-4">
                Curious about me? Here you have it:
              </h2>
              <p className="my-4 text-[#D1D5DB]">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="my-4 text-[#D1D5DB]">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="my-4 text-[#D1D5DB]">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="my-4 text-[#D1D5DB]">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="my-4 text-[#D1D5DB]">
                Finally, some quick bits about me.
              </p>
              <ul className="text-[#D1D5DB] grid grid-cols-2 gap-4">
                <li>B.E. in Computer Engineering</li>
                <li>Avid learner</li>
                <li>Full time freelancer</li>
                <li>Aspiring indie hacker</li>
              </ul>
              <p className="my-4 text-[#D1D5DB]">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
