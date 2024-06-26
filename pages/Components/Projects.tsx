import React from "react";
import Image from "next/legacy/image";
import ImageNext from "next/image";

const Projects = () => {
  return (
    <section id="project">
      <div className="bg-[#02050a] pt-[7rem] md:pt-[8rem] pb-[1rem] ">
        <h1 className="heading">
          Pro
          <span className="text-yellow-400">jects</span>
        </h1>
        <div className="w-[90%] pt-[2rem] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[6rem]">
          <div data-aos="fade-right">
            <a
              href="https://github.com/MarioDanilo0111/NotesApp"
              target="_blank"
            >
              <div className="flex items-center gap-[3%] ">
                <h2 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] mb-[1rem] font-bold text-white">
                  Notes App
                </h2>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-3">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 mx-auto mb-[1rem] ml-[1.9rem]">
                A full stack web application that allows users to create, read,
                update, and delete notes. Security and user authentication are
                bolstered by Passport and its Google OAuth2.0 strategy.
              </p>
              <div className="flex items-start gap-[1rem] overflow-auto mb-[3rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[3rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/expressjs.webp"
                    alt="expressJs"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[4%] md:w-[6%] lg:w-[2%]">
                  <ImageNext
                    src="/icons/mongodb-icon.svg"
                    alt="mongoDB"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/API.webp"
                    alt="api"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[2%]">
                  <ImageNext
                    src="/icons/passport.svg"
                    alt="passport"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]  flex items-center justify-center">
                <Image
                  src="/images/notesApp.webp"
                  alt="portfolio"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-down" data-aos-delay="600">
            <a
              href="https://github.com/MarioDanilo0111/femtioPro"
              target="_blank"
            >
              <div className="flex items-center gap-[3%] ">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                  Food Waste App
                </h1>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-3">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[1rem] ml-[1.9rem]">
                This app is a web application built with React, utilizing
                various dependencies for front-end design and functionality.
              </p>
              <div className="flex items-start gap-[1rem] overflow-auto mb-[3.6rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[3.6rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%] ">
                  <ImageNext
                    src="/icons/react.svg"
                    alt="reactJs"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/react-router.webp"
                    alt="react-router"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/javascript.webp"
                    alt="js"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/bootstrap.webp"
                    alt="bootstrap"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex items-center justify-center">
                <Image
                  src="/images/50pro.webp"
                  alt="portfolio"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="900">
            <a
              href="https://github.com/MarioDanilo0111/candycyberstorappImp"
              target="_blank"
            >
              <div className="flex items-center gap-[3%] ">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">
                  Candy Shop
                </h1>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-3">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[1rem] ml-[1.9rem]">
                Project created during a TypeScript course, built with Axios.
                Ability to respond with a bill of purchased items and quantity
                that will be delivered to the provided address.
              </p>

              <div className="flex items-center gap-[1rem] overflow-auto mb-[3.6rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[3.6rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/vitejs.svg"
                    alt="js"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/axios.webp"
                    alt="axios"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/react-hooks.webp"
                    alt="rect-hooks"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/typescript-icon.webp"
                    alt="tys"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex items-center justify-center">
                <Image
                  src="/images/candyAxios.webp"
                  alt="portfolio"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-right" data-aos-delay="1200">
            <a
              href="https://github.com/MarioDanilo0111/SaveMusicAlbums"
              target="_blank"
            >
              <div className="flex items-center gap-[3%] ">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[0rem] font-bold text-white">
                  Music Album Manager
                </h1>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-1">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.9rem]">
                Application for managing music album, including genres, release
                years, and band names to the data structure. With a full CRUD
                functionality for interacting, utilizing Node&apos;s JSON
                server.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[3.6rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[3.6rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/react.svg"
                    alt="react"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/nodejs-plain.webp"
                    alt="nodeJs"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/crud.webp"
                    alt="crud"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/typeJson.webp"
                    alt="typeJson"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <div className="transform cursor-pointer hover:-rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex items-center justify-center">
                <Image
                  src="/images/save-miw.webp"
                  alt="portfolio"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="1500">
            <a
              href="https://github.com/MarioDanilo0111/hackersNews-app"
              target="_blank"
            >
              <div className="flex items-center gap-[3%] ">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize mb-[0rem] font-bold text-white">
                  Hacker News
                </h1>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-1">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.3rem]">
                Application for fetching data from Hacker News API, structured
                from the request parameters and efficiently organized using
                TypeScript for typing support.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[3.6rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[5rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/vitejs.svg"
                    alt="viteJs"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/typescript-icon.webp"
                    alt="tys"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/axios.webp"
                    alt="axios"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[3%]">
                  <ImageNext
                    src="/icons/node-sass.webp"
                    alt="nodeJs"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
              <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex items-center justify-center">
                <Image
                  src="/images/hackerNews.webp"
                  alt="portfolio"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="1800">
            <a
              href="https://github.com/MarioDanilo0111/Lexicon_Project"
              target="_balank"
            >
              <div className="flex items-center gap-[3%] ">
                <h1 className="text-[20px] md:text-[30px] lg:text-[40px] md:leading-[3rem] leading-[2rem] capitalize  font-bold text-white">
                  Python Lexicon AI Project
                </h1>
                <div className="w-full ms:w-[9%] ml:w-[9%] md:w-[9%] lg:w-[9%] mb-1">
                  <ImageNext
                    src="/icons/github-icon.webp"
                    alt="githubOctocat"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
              <p className="text-[16px] text-slate-300 p-[1rem] mb-[0rem] ml-[1.3rem]">
                My first attempt at building an application using Python. Using
                AI intelligens and Streamlit interface options. This project was
                a significant milestone in my coding journey, developing an idee
                that could be scaled to be a more powerful solution for
                developers when understanding complex programming concepts.
              </p>
              <div className="flex items-center gap-[1rem] overflow-auto mb-[3.6rem] md:mb-[1.3rem] ms:mb-[1rem] ml:mb-[3.6rem]">
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[8%]">
                  <ImageNext
                    src="/icons/streamlit_py.svg"
                    alt="streamlit"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[6%]">
                  <ImageNext
                    src="/icons/Pandas.png"
                    alt="pandas_py"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[6%]">
                  <ImageNext
                    src="/icons/scikit-learn.png"
                    alt="scikit-learn-python"
                    height={300}
                    width={300}
                  />
                </div>
                <div className="w-full ms:w-[5%] ml:w-[5%] md:w-[6%] lg:w-[9%]">
                  <ImageNext
                    src="/icons/plotly_py.webp"
                    alt="plotython"
                    height={300}
                    width={300}
                  />
                </div>
              </div>
              <div className="transform cursor-pointer hover:rotate-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] flex items-center justify-center">
                <Image
                  src="/images/lex_py_app.webp"
                  alt="lexicon_app"
                  width={500}
                  height={300}
                  className="rounded-xl"
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
