import React from "react";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

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
                I'm a frontend and fullstack developer with a strong focus on
                structure, clarity, and user-friendly design.
                <br />
                My experience spans React, Django, and DevOps practices, from
                automation with YAML and CI/CD pipelines to working with Linux
                and building a solid understanding of system fundamentals.
                <br />
                Alongside projects, I practice katas to strengthen my grasp of
                React hooks, state management, and JavaScript fundamentals,
                keeping my skills sharp for real-world challenges.
                <br />I enjoy collaborating with product owners and designers,
                and I value taking responsibility as a go-to person or tech-lead
                when it helps the team move forward.
              </p>
            </div>
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
              width={260}
              height={400}
              className="relative z-[11] object-contain "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 260px"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
