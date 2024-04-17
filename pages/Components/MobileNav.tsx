import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09191a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <a href="#home" onClick={closeNav}>
            HOME
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#project" onClick={closeNav}>
            PROJECT
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#about" onClick={closeNav}>
            ABOUT
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#skills" onClick={closeNav}>
            EDUCATION
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#services" onClick={closeNav}>
            WORK AREA
          </a>
        </div>
        <div className="nav-link-mobile">
          <a href="#review" onClick={closeNav}>
            REVIEW
          </a>
        </div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNav;
