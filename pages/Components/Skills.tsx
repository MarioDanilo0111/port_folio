import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center ">
        <div className="">
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="Mearn Stack Developer" year="2016 - 2020" />
          <SkillsLanguage
            skill1="React.js"
            skill2="Express.js"
            skill3="TypeScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div className="">
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="Mearn Stack Developer" year="2016 - 2020" />
          <SkillsLanguage
            skill1="HTML5"
            skill2="CSS3"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
        <div className="">
          <SkillsItem title="React Developer" year="2014 - 2018" />
          <SkillsItem title="Mearn Stack Developer" year="2016 - 2020" />
          <SkillsLanguage
            skill1="HTML5"
            skill2="CSS3"
            skill3="JavaScript"
            level1="w-[91%]"
            level2="w-[88%]"
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
