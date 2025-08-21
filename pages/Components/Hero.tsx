import React, { useEffect } from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import AOS from "aos";

const Hero = () => {
  useEffect(() => {
    // Refresh AOS after a short delay
    setTimeout(() => {
      AOS.refresh();
    }, 300); // Adjust the delay (in milliseconds) as needed
  }, []);

  return (
    <section>
      <Particle />
      <div className="h-[110vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
        <div
          className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center"
          id="home"
        >
          <div className="">
            <h1 className="text-[35px] md:text-[50px] text-white font-bold JetBrains">
              HI, I&apos;M <samp className="text-yellow-400">Danilo</samp>
            </h1>
            <span className="JetBrains">
              <TextEffect />
            </span>
            <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">
              I&apos;m a frontend and fullstack developer experienced in React,
              Django, and modern DevOps practices. I enjoy shaping user-friendly
              solutions in close collaboration with designers and product
              owners, <br /> while also stepping into a tech-lead role when
              needed, guiding teammates, clarifying goals, and being someone
              others can lean on.
            </p>

            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <a
                href="/myCV/CV-2024-PortfolioEnglishLinkedIn.pdf"
                download="CV-2024-PortfolioEnglishLinkedIn.pdf"
                className="flex items-center space-x-2"
              >
                <DocumentArrowDownIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] " />
                <p className="text-[20px] font-semibold text-white">
                  CV English version
                </p>
              </a>
              <a
                href="/myCV/CV-2024-PortfolioSwedishLinkedIn.pdf"
                download="CV-2024-PortfolioSwedishLinkedIn.pdf"
                className="flex items-center space-x-2"
              >
                <button className="flex items-center space-x-2">
                  <DocumentArrowDownIcon className="w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] " />
                  <p className="text-[20px] font-semibold text-white">
                    CV Swedish version
                  </p>
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="w-[450px] lg:flex items-center rounded-full h-[450px] bg-[#55e6a5] relative hidden"
          >
            <Image
              src="/images/mdfvS.webp"
              alt="user"
              width={450}
              height={450}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover object-top"
              style={{ width: "100%", height: "100%" }}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
