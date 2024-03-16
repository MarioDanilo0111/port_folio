import React from "react";
import Image from "next/legacy/image";

const Projects = () => {
  return (
    <section id="project">
      <div className="bg-[#02050a] pt-[7rem] md:pt-[8rem] pb-[1rem] ">
        <h1 className="heading">
          Pro
          <span className="text-yellow-400">jects</span>
        </h1>
        <div className="w-[90%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[6rem]">
          <div data-aos="fade-right">
            <a
              href="https://github.com/MarioDanilo0111/NotesApp"
              target="_blank"
            >
              <h2 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                Notes App
              </h2>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[1rem] ml-[1.9rem]">
                A full stack web application that allows users to create, read,
                update, and delete notes. Security and user authentication are
                bolstered by Passport and its Google OAuth2.0 strategy.
              </p>
              <div className="flex items-start gap-[1rem] overflow-auto mb-[1.3rem] md:mb-[.6rem]">
                <img
                  src="/icons/expressjs.webp"
                  alt="expressJs"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/mongodb-icon.svg"
                  alt="mongoDB"
                  className="w-[6%] md:w-[3%] h-auto"
                />
                <img
                  src="/icons/API.webp"
                  alt="api"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/passport.svg"
                  alt="passport"
                  className="w-[6%] md:w-[5%] h-auto"
                />
              </div>
              <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/notesApp.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-down" data-aos-delay="600">
            <a
              href="https://github.com/MarioDanilo0111/femtioPro"
              target="_blank"
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                Food Waste App
              </h1>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[1rem] ml-[1.9rem]">
                This app is a web application built with React, utilizing
                various dependencies for front-end design and functionality.
              </p>
              <div className="flex items-start gap-[1rem] overflow-auto mb-[1.3rem] md:mb-[.6rem]">
                <img
                  src="/icons/react.svg"
                  alt="reactJs"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/react-router.webp"
                  alt="react-router"
                  className="w-[16%] md:w-[9%] h-auto"
                />
                <img
                  src="/icons/javascript.webp"
                  alt="js"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/bootstrap.webp"
                  alt="bootstrap"
                  className="w-[9%] md:w-[6%] h-auto"
                />
              </div>

              <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/50pro.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="900">
            <a
              href="https://github.com/MarioDanilo0111/candycyberstorappImp"
              target="_blank"
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                Candy Shop
              </h1>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[1rem] ml-[1.9rem]">
                Project created during a TypeScript course, built with Axios.
                Ability to respond with a bill of purchased items and quantity
                that will be delivered to the provided address.
              </p>

              <div className="flex items-center gap-[1rem] overflow-auto mb-[1.3rem] md:mb-[.6rem]">
                <img
                  src="/icons/vitejs.svg"
                  alt="js"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/axios.webp"
                  alt="axios"
                  className="w-[6%] md:w-[13%] h-auto"
                />
                <img
                  src="/icons/react-hooks.webp"
                  alt="rect-hooks"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/typescript-icon.webp"
                  alt="tys"
                  className="w-[6%] md:w-[6%] h-auto"
                />
              </div>

              <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/candyAxios.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-right" data-aos-delay="1200">
            <a
              href="https://github.com/MarioDanilo0111/SaveMusicAlbums"
              target="_blank"
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[0rem] font-bold text-white">
                Music Album Manager
              </h1>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.9rem]">
                Application for managing music album, including genres, release
                years, and band names to the data structure. With a full CRUD
                functionality for interacting, utilizing Node's JSON server.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[1.3rem] md:mb-[.6rem]">
                <img
                  src="/icons/react.svg"
                  alt=""
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/nodejs-plain.webp"
                  alt="nodeJs"
                  className="w-[6%] md:w-[4rem] h-auto"
                />
                <img
                  src="/icons/crud.webp"
                  alt="crud"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/typeJson.webp"
                  alt=""
                  className="w-[6%] md:w-[6%] h-auto"
                />
              </div>
              <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/save-miw.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <a
              href="https://github.com/MarioDanilo0111/hackersNews-app"
              target="_blank"
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[0rem] font-bold text-white">
                Hacker News
              </h1>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.3rem]">
                Application for fetching data from Hacker News API, structured
                from the request parameters and efficiently organized using
                TypeScript for typing support.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[1rem] md:mb-[.4rem]">
                <img
                  src="/icons/vitejs.svg"
                  alt=""
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/typescript-icon.webp"
                  alt=""
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/axios.webp"
                  alt="axios"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/node-sass.webp"
                  alt="nodeJs"
                  className="w-[6%] md:w-[4rem] h-auto"
                />
              </div>
              <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/hackerNews.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1800"
            /* className="flex items-center" */
          >
            <a
              href="https://github.com/MarioDanilo0111/Portfolio-CV"
              target="_balank"
            >
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize  font-bold text-white">
                First attempt Application
              </h1>

              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.3rem]">
                First project, doving into building a comprehensive app. I used
                @emailjs/browser, handling email from the frontend, bootstrap
                and for responsive UI design, router-dom for navigation. This
                project was a significant milestone in my coding journey
                developing with React.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[1rem] md:mb-[.3rem]">
                <img
                  src="/icons/react.svg"
                  alt=""
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/emailJs.webp"
                  alt="emailJs"
                  className="w-[3%] md:w-[3rem] h-auto"
                />
                <img
                  src="/icons/bootstrap.webp"
                  alt="crud"
                  className="w-[6%] md:w-[6%] h-auto"
                />
                <img
                  src="/icons/react-router.webp"
                  alt="reactRouter"
                  className="w-[6%] md:w-[6%] h-auto"
                />
              </div>
              <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]">
                <Image
                  src="/images/beginersPortfolio.webp"
                  alt="portfolio"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
