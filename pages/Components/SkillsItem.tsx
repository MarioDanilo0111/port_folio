import React from "react";

interface Props {
  title: string;
  fundation: string;
  year: string;
  description: string;
}

const SkillsItem = ({ title, year, fundation, description }: Props) => {
  return (
    <div className="mb-[3rem] md:mb-[3rem]">
      <span className="px-[2rem] text-[#55a6a5] py-[0.9rem] Graduate text-[18px] border-[2px] border-[#55a6a5] ">
        {year}
      </span>
      <h1 className="mt-[2rem] capitalize JetBrains font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}, <br />
        {fundation}
      </h1>
      <p className=" text-[#aaaaaa] font-normal JetBrains w-[80%] text-[17px] opacity-80">
        {description}
      </p>
    </div>
  );
};

export default SkillsItem;
