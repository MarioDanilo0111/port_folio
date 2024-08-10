import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import SkillsArray from "../../lib/SkillsArray";

const Skills = () => {
  return (
    <section id="skills">
      <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
        <h1 className="heading">
          Education & <span className="text-yellow-400">Skill</span>
        </h1>
        <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
          <div className="">
            {SkillsArray.map((item, index) => (
              <div key={index}>
                <SkillsItem
                  title={item.title}
                  year={item.year}
                  fundation={item.fundation}
                  description={item.description}
                />
                <div className="mb-[2rem]">
                  <SkillsLanguage skills={item.SkillsLanguage} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
