import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <section id="services">
      <div className="bg-[#121212] pt-[7rem] md:pt-[8rem] pb-[5rem]">
        <div className="">
          <p className="heading">
            Work <span className="text-yellow-400">Area</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
            <div data-aos="fade-right">
              <a
                href="https://noq.nu/vi-ar-noq/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-red-700 hover:scale-105 transform transition-all duration-300 hover:-rotate-2 uppercase font-semibold text-center p-[2rem] rounded-lg min-h-[32rem] cursor-pointer"
              >
                <div className="absolute top-4 right-4 text-yellow-300">
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </div>
                <img
                  src="/icons/Logotyp_vit_vector.webp"
                  className="w-20 h-20 mx-auto object-contain mb-4"
                  alt="noQ Logo"
                />

                <h1 className="text-[20px] md:text-[28px] mb-4">
                  Fullstack <br /> Developer
                </h1>
                <p className="text-[15px] text-[#d3d2d2] font-normal">
                  React + Django features for the noQ platform, collaborating
                  with product owners and designers, and acting as a go-to
                  teammate for guidance and structure.
                </p>
              </a>
            </div>
            <div data-aos="zoom-out" data-aos-delay="300">
              <a
                href="https://codesandbox.io/p/sandbox/floral-frost-nncd4m"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block bg-orange-700 hover:scale-105 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded-lg min-h-[32rem] cursor-pointer"
              >
                <div className="absolute top-4 right-4 text-yellow-300">
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </div>
                <img
                  src="/icons/codesandbox.svg"
                  alt="codeSandbox Logo"
                  className="w-20 h-20 mx-auto object-contain mb-4"
                />
                <h1 className="text-[20px] md:text-[28px] mb-4">
                  Continuous Learning Katas
                </h1>
                <p className="text-[15px] text-[#d3d2d2] font-normal">
                  I use coding katas to sharpen fundamentals and stay reliable
                  as a teammate. Practicing React hooks, state, problem-solving,
                  and DSA keeps me ready to guide others and tackle challenges
                  with clarity.
                </p>
              </a>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
              <div
                className="relative bg-[#1f5ae9] text-white uppercase font-semibold rounded-lg p-8 min-h-[32rem] flex flex-col items-center justify-center text-center
              "
              >
                <img
                  src="/icons/depIcon.webp"
                  alt="Deployed Projects Icon"
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-2xl md:text-3xl tracking-wide mb-6">
                  Deployed
                </h2>
                <div className="flex flex-col item-center gap-6 mt-2">
                  <a
                    role="listitem"
                    href="https://geo-monitor.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Open Geo-Monitor (Netlify) in a new tab"
                  >
                    <img
                      src="/icons/netlify-original.webp"
                      alt="Geo Monitor on Netlify"
                      className="w-7 h-7 object-contain"
                    />
                    <span className="text-white font-semibold normal-case">
                      Geo-Monitor
                    </span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                  </a>
                  <a
                    role="listitem"
                    href="https://huggingface.co/spaces/maridanilo/lexicon-clean"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Open Lexicon App (Hugging Face) in a new tab"
                  >
                    <img
                      src="/icons/hugging_face.webp"
                      alt="Hugging face logo"
                      className="w-7 h-7 object-contain"
                    />
                    <span className="text-white font-medium">Lexicon App</span>
                    <ArrowTopRightOnSquareIcon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
