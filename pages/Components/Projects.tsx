import React from "react";
import Image from "next/legacy/image";

const Projects = () => {
  return (
    <section id="project">
      <div className="bg-[#02050a] pt-[7rem] md:pt-[8rem] pb-[1rem] ">
        <h1 className="heading">
          Pro
          <span className="text-yellow-400">Cypress</span>
        </h1>
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] ">
          <div data-aos="fade-right">
            <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] overflow-hidden rounded-lg">
              <Image
                src="/images/p1.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-delay="600">
            <div
              className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]
              rounded-lg"
            >
              <Image
                src="/images/p2.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="900">
            <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/p3.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
          <div data-aos="fade-right" data-aos-delay="1200">
            <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/p4.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/p5.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="1800">
            <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/p1.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="contain"
                /* className="object-contain" */
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
