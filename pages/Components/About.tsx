import React from "react";
import {
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/20/solid";
import Image from "next/legacy/image";

const About = () => {
  return (
    <section id="about">
      <div className="bg-[#121121] pb-[3rem] pt-[7rem] md:pt-[11rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
          <div className="">
            <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
              About Me
            </h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
              Transforming <span className="text-yellow-400">Visions</span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              {/* <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span> */}
              <p className="text-[19px] text-slate-300 w-full md:w-[80%]">
                Motivated individual with a strong focus on order, planning, and
                structure. Successful completion of studies in Frontend
                Development and ongoing education in Python, focused on machine
                learning and AI, have significantly expanded my skills and
                horizons. I thrive on positive challenges that inspire
                continuous growth and am committed to my educational and
                professional development. I am enthusiastic about contributing
                to the industry, acquiring cutting-edge knowledge, and making a
                significant positive impact. <br />
                With a passion for Frontend development, I am dedicated to
                crafting seamless and engaging user experiences that not only
                meet but exceed expectations.
              </p>
            </div>
            {/* <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-cemter space-x-2">
              <p>Download CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </button> */}
            <a
              href="/myCV/CV-2024-Portfolio English LinkedIn.pdf"
              download="CV-2024-Portfolio English LinkedIn.pdf"
              className="flex items-center space-x-2"
            >
              <DocumentArrowDownIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] " />
              <p className="text-[20px] font-semibold text-white">
                Download CV
              </p>
            </a>
          </div>
          <div
            data-aos="fade-down"
            className="lg:w-[260px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[200px] h-[300px] relative"
          >
            <Image
              data-aos="flip-left"
              src="/images/aboutM.webp"
              alt="user"
              layout="fill"
              objectFit="contain"
              className="relative z-[11] w-[100%] h-[100%]"
            />
            <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
