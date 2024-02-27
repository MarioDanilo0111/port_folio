import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/legacy/image";
import { ArrowDownTrayIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import AOS from "aos";

import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    // Refresh AOS after a short delay
    setTimeout(() => {
      AOS.refresh();
    }, 300); // Delay in milliseconds (100ms in this case)
  }, []);

  return (
    <section id="home">
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <Particle />
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div className="">
            <h1 className="text-[35px] md:text-[50px] text-white font-bold ">
              HI, I&apos;M <samp className="text-yellow-400">Mario</samp>
            </h1>
            <TextEffect />
            <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
              As a driven individual, I thrive on bringing order, meticulous
              planning, and a sense of structure to every project I undertake.
              The successful completion of my studies has not only broadened my
              horizons but has also equipped me with a diverse set of skills.{" "}
              <br /> Approach each task as a positive challenge, viewing it as
              an opportunity for personal and professional growth. My enthusiasm
              lies in actively contributing to projects, constantly acquiring
              new knowledge, and making a positive impact on both the industry
              and the world at large.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-cemter space-x-2">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
              <button className="flex items-center space-x-2">
                <PlayCircleIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] " />
                <p className="text-[20px] font-semibold text-white">
                  Watch The Video
                </p>
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-[450px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[450px]"
          >
            <Image
              src="/images/mdfv.jpg"
              alt="user"
              layout="fill"
              className="object-cover rounded-full"
              style={{
                objectPosition: "center center",
                transform: "scale(.99993)",
              }}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
